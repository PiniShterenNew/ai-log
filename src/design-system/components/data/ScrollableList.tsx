import { useRef, useState, useEffect, useCallback } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import { cn } from '@/design-system/utils';

export interface ScrollableListProps<T> {
  /**
   * Array of items to render
   */
  items: T[];
  /**
   * Render function for each item
   * Receives the item and index, returns React node
   */
  renderItem: (item: T, index: number) => React.ReactNode;
  /**
   * Semantic spacing variant - defines gap between items
   */
  spacing?: 
    | 'compact'      // Tight spacing (8px)
    | 'comfortable'   // Default spacing (16px)
    | 'spacious'     // Loose spacing (24px)
  /**
   * Height variant - defines container height
   */
  variant?: 
    | 'default'      // Standard height (600px)
    | 'compact'      // Reduced height (400px)
    | 'spacious'     // Taller height (800px)
    | 'full'          // Full viewport height minus header
  /**
   * Number of columns for grid layout
   * Responsive: 1 column on mobile, specified columns on md+ breakpoint
   * Default: 1
   */
  columns?: number;
  /**
   * Estimated item height in pixels (for virtualization optimization)
   * Default: 120px
   */
  estimatedItemSize?: number;
}

const variantHeightMap = {
  'default': 'h-[600px]',
  'compact': 'h-[400px]',
  'spacious': 'h-[800px]',
  'full': 'h-full',
};

const spacingGapMap = {
  'compact': 8,   // gap-2
  'comfortable': 16, // gap-4
  'spacious': 24, // gap-6
};

export function ScrollableList<T>({
  items,
  renderItem,
  spacing = 'comfortable',
  variant = 'default',
  columns = 1,
  estimatedItemSize = 120,
}: ScrollableListProps<T>) {
  const parentRef = useRef<HTMLDivElement>(null);
  const [isMdOrLarger, setIsMdOrLarger] = useState(false);
  
  // Responsive: check if screen is md (768px) or larger
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMdOrLarger(window.innerWidth >= 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  
  const itemGap = spacingGapMap[spacing];
  // Responsive: 1 column on mobile, specified columns on md+ breakpoint
  const effectiveColumns = isMdOrLarger ? columns : 1;
  const isGrid = effectiveColumns > 1;
  
  // For grid layout, calculate total rows
  const totalRows = isGrid ? Math.ceil(items.length / effectiveColumns) : items.length;
  
  // Memoize callbacks to stabilize references
  const getScrollElement = useCallback(() => parentRef.current, []);
  const estimateSize = useCallback((index: number) => {
    if (isGrid) {
      // For grid: row height + gap (except last row)
      const isLastRow = index === totalRows - 1;
      return estimatedItemSize + (isLastRow ? 0 : itemGap);
    }
    return estimatedItemSize + itemGap;
  }, [isGrid, totalRows, estimatedItemSize, itemGap]);
  
  // Note: React Compiler warning about useVirtualizer is expected.
  // TanStack Virtual's useVirtualizer returns functions that manage their own lifecycle.
  // Memoizing the virtualizer itself would cause stale UI - this is intentional behavior.
  // The callbacks above are memoized to provide stable references.
  const virtualizer = useVirtualizer({
    count: isGrid ? totalRows : items.length,
    getScrollElement,
    estimateSize,
    overscan: 5,
  });
  
  // Recalculate when screen size changes
  useEffect(() => {
    virtualizer.measure();
  }, [isMdOrLarger, virtualizer]);

  if (items.length === 0) {
    return null;
  }

  if (isGrid) {
    // Grid layout: render rows with virtualization
    return (
      <div
        ref={parentRef}
        className={cn(
          'overflow-auto ds-scrollbar w-full',
          variantHeightMap[variant]
        )}
      >
        <div
          style={{
            height: `${virtualizer.getTotalSize()}px`,
            width: '100%',
            maxWidth: '100%',
            position: 'relative',
            boxSizing: 'border-box',
          }}
        >
          {virtualizer.getVirtualItems().map((virtualRow) => {
            const rowIndex = virtualRow.index;
            const startIndex = rowIndex * effectiveColumns;
            const endIndex = Math.min(startIndex + effectiveColumns, items.length);
            const rowItems = items.slice(startIndex, endIndex);
            const isLastRow = rowIndex === totalRows - 1;
            
            return (
              <div
                key={virtualRow.key}
                data-index={virtualRow.index}
                ref={virtualizer.measureElement}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  maxWidth: '100%',
                  transform: `translateY(${virtualRow.start}px)`,
                  display: 'grid',
                  gridTemplateColumns: `repeat(${effectiveColumns}, minmax(0, 1fr))`,
                  columnGap: `${itemGap}px`,
                  paddingBottom: !isLastRow ? `${itemGap}px` : 0,
                  boxSizing: 'border-box',
                }}
              >
                {rowItems.map((item, colIndex) => (
                  <div 
                    key={startIndex + colIndex}
                    style={{
                      minWidth: 0,
                      maxWidth: '100%',
                      boxSizing: 'border-box',
                      overflow: 'hidden',
                    }}
                  >
                    {renderItem(item, startIndex + colIndex)}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Single column layout: original virtualization
  return (
    <div
      ref={parentRef}
      className={cn(
        'overflow-auto ds-scrollbar',
        variantHeightMap[variant]
      )}
    >
      <div
        style={{
          height: `${virtualizer.getTotalSize()}px`,
          width: '100%',
          position: 'relative',
        }}
      >
        {virtualizer.getVirtualItems().map((virtualItem) => {
          const item = items[virtualItem.index];
          
          return (
            <div
              key={virtualItem.key}
              data-index={virtualItem.index}
              ref={virtualizer.measureElement}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                transform: `translateY(${virtualItem.start}px)`,
                paddingBottom: virtualItem.index < items.length - 1 ? `${itemGap}px` : 0,
              }}
            >
              {renderItem(item, virtualItem.index)}
            </div>
          );
        })}
      </div>
    </div>
  );
}
