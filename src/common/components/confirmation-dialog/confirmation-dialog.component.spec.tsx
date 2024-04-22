import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';

describe('common/components/confirmation-dialog/confirmation-dialog.component', () => {
  it('should render with correct title and content', () => {
    // Arrange
    const mockProps = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'Test Dialog',
      labels: { closeButton: 'Close', acceptButton: 'Accept' },
      children: <div>Test Content</div>,
    };

    // Act
    const { getByText } = render(
      <ConfirmationDialogComponent {...mockProps} />
    );

    // Assert
    expect(getByText('Test Dialog')).toBeInTheDocument();
    expect(getByText('Test Content')).toBeInTheDocument();
  });

  it('should call onClose when close button is clicked', () => {
    // Arrange
    const handleClose = jest.fn();
    const mockProps = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: handleClose,
      title: 'Test Dialog',
      labels: { closeButton: 'Close', acceptButton: 'Accept' },
      children: <div>Test Content</div>,
    };
    const { getByText } = render(
      <ConfirmationDialogComponent {...mockProps} />
    );

    // Act
    fireEvent.click(getByText('Close'));

    // Assert
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('should call onAccept when accept button is clicked', () => {
    // Arrange
    const handleAccept = jest.fn();
    const mockProps = {
      isOpen: true,
      onAccept: handleAccept,
      onClose: jest.fn(),
      title: 'Test Dialog',
      labels: { closeButton: 'Close', acceptButton: 'Accept' },
      children: <div>Test Content</div>,
    };
    const { getByText } = render(
      <ConfirmationDialogComponent {...mockProps} />
    );

    // Act
    fireEvent.click(getByText('Accept'));

    // Assert
    expect(handleAccept).toHaveBeenCalledTimes(1);
  });

  it('should call onClose after onAccept when accept button is clicked', () => {
    // Arrange
    const handleClose = jest.fn();
    const handleAccept = jest.fn(() => {
      expect(handleClose).toHaveBeenCalledTimes(0);
    });
    const mockProps = {
      isOpen: true,
      onAccept: handleAccept,
      onClose: handleClose,
      title: 'Test Dialog',
      labels: { closeButton: 'Close', acceptButton: 'Accept' },
      children: <div>Test Content</div>,
    };
    const { getByText } = render(
      <ConfirmationDialogComponent {...mockProps} />
    );

    // Act
    fireEvent.click(getByText('Accept'));

    // Assert
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
