import { renderHook, act } from '@testing-library/react';
import { useConfirmationDialog } from './confirmation-dialog.hook';

describe('common/components/confitmation-dialog/confirmation-dialog.hook', () => {
  it('initial state', () => {
    // Arrange & Act
    const { result } = renderHook(() => useConfirmationDialog());

    // Assert
    expect(result.current.isOpen).toBe(false);
    expect(result.current.itemToDelete).toEqual({ id: '', name: '' });
  });

  it('onOpenDialog sets isOpen to true and itemToDelete to provided item', () => {
    // Arrange
    const { result } = renderHook(() => useConfirmationDialog());
    const item = { id: '1', name: 'Test Item' };

    // Act
    act(() => {
      result.current.onOpenDialog(item);
    });

    // Assert
    expect(result.current.isOpen).toBe(true);
    expect(result.current.itemToDelete).toEqual(item);
  });

  it('onClose sets isOpen to false', () => {
    // Arrange
    const { result } = renderHook(() => useConfirmationDialog());

    // Act
    act(() => {
      result.current.onClose();
    });

    // Assert
    expect(result.current.isOpen).toBe(false);
  });

  it('onAccept resets itemToDelete to an empty lookup', () => {
    // Arrange
    const { result } = renderHook(() => useConfirmationDialog());
    const item = { id: '1', name: 'Test Item' };

    // Act
    act(() => {
      result.current.onOpenDialog(item);
      result.current.onAccept();
    });

    // Assert
    expect(result.current.itemToDelete).toEqual({ id: '', name: '' });
  });
});
