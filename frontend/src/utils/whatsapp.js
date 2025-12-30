/**
 * WhatsApp utility functions
 */

import { businessConfig } from '../config/businessConfig';

/**
 * Generate WhatsApp URL with pre-filled message
 * @param {string} customMessage - Optional custom message (uses config default if not provided)
 * @returns {string} - WhatsApp URL
 */
export const getWhatsAppUrl = (customMessage = null) => {
  const message = customMessage || businessConfig.whatsappMessage;
  const encodedMessage = encodeURIComponent(message);
  const number = businessConfig.whatsappNumber.replace(/[^0-9]/g, '');
  
  return `https://wa.me/${number}?text=${encodedMessage}`;
};

/**
 * Open WhatsApp in new window/tab
 * @param {string} customMessage - Optional custom message
 */
export const openWhatsApp = (customMessage = null) => {
  window.open(getWhatsAppUrl(customMessage), '_blank');
};

/**
 * Generate WhatsApp message for specific action
 * @param {string} action - The action type (e.g., 'order', 'inquiry', 'booking')
 * @param {object} details - Additional details to include in message
 * @returns {string} - Formatted WhatsApp URL
 */
export const getWhatsAppUrlForAction = (action, details = {}) => {
  let message = '';
  
  switch (action) {
    case 'get-started':
      message = `Hi! I'd like to get started with ${businessConfig.businessName}.`;
      break;
    case 'inquiry':
      message = `Hi! I have a question about your services.`;
      break;
    case 'demo':
      message = `Hi! I'd like to see a demo of how this works.`;
      break;
    case 'custom':
      message = details.message || businessConfig.whatsappMessage;
      break;
    default:
      message = businessConfig.whatsappMessage;
  }
  
  return getWhatsAppUrl(message);
};

export default {
  getWhatsAppUrl,
  openWhatsApp,
  getWhatsAppUrlForAction
};