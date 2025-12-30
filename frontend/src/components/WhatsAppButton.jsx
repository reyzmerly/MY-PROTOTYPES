import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const WhatsAppButton = ({ 
  message, 
  className = '',
  variant = 'default',
  size = 'default',
  children 
}) => {
  const handleClick = () => {
    window.open(getWhatsAppUrl(message), '_blank');
  };

  return (
    <Button
      onClick={handleClick}
      variant={variant}
      size={size}
      className={className}
    >
      <MessageCircle className="mr-2 h-4 w-4" />
      {children || 'Contact on WhatsApp'}
    </Button>
  );
};

export default WhatsAppButton;