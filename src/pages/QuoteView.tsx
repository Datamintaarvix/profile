import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface QuoteViewProps {
  initialService?: string;
  initialPackage?: string;
}

export const QuoteView: React.FC<QuoteViewProps> = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/contact', { replace: true });
  }, [navigate]);

  return null;
};

export default QuoteView;
