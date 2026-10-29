import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialPackage?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      onClose();
      navigate('/contact');
    }
  }, [isOpen, onClose, navigate]);

  return null;
};

export default QuoteModal;
