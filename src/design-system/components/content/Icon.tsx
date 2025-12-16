import {
  HiMagnifyingGlass,
  HiClock,
  HiCalendar,
  HiChevronUp,
  HiChevronDown,
  HiChevronLeft,
  HiClipboard,
  HiCheck,
  HiCog6Tooth,
  HiArrowTopRightOnSquare,
} from 'react-icons/hi2';
import {
  HiOutlineClipboard,
} from 'react-icons/hi';
import {
  RxMixerHorizontal,
  RxCaretSort,
  RxCross2,
  RxQuestionMarkCircled,
  RxTimer,
  RxCode,
} from 'react-icons/rx';
import { cn } from '@/design-system/utils';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  MagnifyingGlassIcon: HiMagnifyingGlass,
  Cross2Icon: RxCross2,
  MixerHorizontalIcon: RxMixerHorizontal,
  CaretSortIcon: RxCaretSort,
  ClockIcon: HiClock,
  CalendarIcon: HiCalendar,
  TimerIcon: RxTimer,
  QuestionMarkCircledIcon: RxQuestionMarkCircled,
  CodeIcon: RxCode,
  ChevronUpIcon: HiChevronUp,
  ChevronDownIcon: HiChevronDown,
  ChevronLeftIcon: HiChevronLeft,
  CopyIcon: HiClipboard,
  CopyOutlineIcon: HiOutlineClipboard,
  CheckIcon: HiCheck,
  Cog6ToothIcon: HiCog6Tooth,
  ArrowTopRightOnSquareIcon: HiArrowTopRightOnSquare,
};

export interface IconProps {
  name: keyof typeof iconMap;
  /**
   * Visual variant - defines size, color, and layout behavior
   */
  variant?: 
    | 'default'      // md size, default color
    | 'sm'           // sm size, default color
    | 'xs'           // xs size, default color
    | 'lg'           // lg size, default color
    | 'muted'        // md size, muted color
    | 'muted-sm'     // sm size, muted color
    | 'primary'      // md size, primary color
    | 'warning'      // xs size, warning color
    | 'check'        // sm size, default color, ml-auto (for checkmarks in lists)
    | 'shrink'       // xs size, default color, shrink-0
    | 'white'        // xs size, white color
  /**
   * Additional className (for design-system internal composition only)
   */
  className?: string;
}

const variantMap = {
  'default': 'w-5 h-5 text-slate-900',
  'sm': 'w-4 h-4 text-slate-900',
  'xs': 'w-3 h-3 text-slate-900',
  'lg': 'w-6 h-6 text-slate-900',
  'muted': 'w-5 h-5 text-slate-500',
  'muted-sm': 'w-4 h-4 text-slate-500',
  'primary': 'w-5 h-5 text-blue-600',
  'warning': 'w-3 h-3 text-amber-700',
  'check': 'w-4 h-4 text-slate-900 ml-auto',
  'shrink': 'w-3 h-3 text-slate-900 shrink-0',
  'white': 'w-5 h-5 text-white',
};

export function Icon({ name, variant = 'default', className }: IconProps) {
  const IconComponent = iconMap[name];
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return (
    <IconComponent className={cn(variantMap[variant], className)} />
  );
}
