import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { useDebouncedCallback } from './useDebounce';

describe('useDebouncedCallback', () => {
    it('does not call callback immediately', () => {
        vi.useFakeTimers();

        const callback = vi.fn();

        const { result } = renderHook(() =>
            useDebouncedCallback(callback, 500)
        );

        act(() => {
            result.current();
        });

        expect(callback).not.toHaveBeenCalled();

        vi.useRealTimers();
    });

    it('calls callback after the delay', () => {
        vi.useFakeTimers();

        const callback = vi.fn();

        const { result } = renderHook(() =>
            useDebouncedCallback(callback, 500)
        );

        act(() => {
            result.current();
        });

        act(() => {
            vi.advanceTimersByTime(499);
        });
        expect(callback).not.toHaveBeenCalled();

        act(() => {
            vi.advanceTimersByTime(1);
        });
        expect(callback).toHaveBeenCalledTimes(1);

        vi.useRealTimers();
    });

    it('calls callback only once when called multiple times within delay', () => {
        vi.useFakeTimers();
      
        const callback = vi.fn();
      
        const { result } = renderHook(() =>
          useDebouncedCallback(callback, 500)
        );
      
        act(() => {
          result.current();
          result.current();
          result.current();
        });
      
        act(() => {
          vi.advanceTimersByTime(500);
        });
      
        expect(callback).toHaveBeenCalledTimes(1);
      
        vi.useRealTimers();
      });

      it('does not call callback after unmount', () => {
        vi.useFakeTimers();
      
        const callback = vi.fn();
      
        const { result, unmount } = renderHook(() =>
          useDebouncedCallback(callback, 500)
        );
      
        act(() => {
          result.current();
        });
      
        unmount();
      
        act(() => {
          vi.advanceTimersByTime(500);
        });
      
        expect(callback).not.toHaveBeenCalled();
      
        vi.useRealTimers();
      });
});
