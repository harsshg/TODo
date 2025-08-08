import React from 'react';

export interface ModalsProps {
  Value: React.ReactNode;
  animation?: 'none' | 'slide' | 'fade';
  transparent?: boolean;
  visible: boolean;
  onRequestClose: () => void;
}
