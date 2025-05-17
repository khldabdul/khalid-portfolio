/**
 * Formats a date range string from start and end dates
 * @param startDate - Start date 
 * @param endDate - End date (optional)
 * @returns Formatted date range string
 */
export function formatDateRange(startDate: string, endDate: string = 'Present'): string {
  return `${startDate} – ${endDate}`;
}

/**
 * Truncates a string to specified length and adds ellipsis
 * @param text - Text to truncate
 * @param length - Maximum length
 * @returns Truncated text with ellipsis if needed
 */
export function truncateText(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length) + '...';
}

/**
 * Generates initials from a full name
 * @param name - Full name
 * @returns Initials (first letter of first and last name)
 */
export function getInitials(name: string): string {
  const parts = name.split(' ');
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
}

/**
 * Formats a phone number for display
 * @param phone - Raw phone number
 * @returns Formatted phone number
 */
export function formatPhoneNumber(phone: string): string {
  // Simple formatting for Indonesian numbers
  if (phone.startsWith('+62')) {
    const cleaned = phone.replace(/\D/g, '');
    const match = cleaned.match(/^(62|0)(\d{3})(\d{4})(\d{4})$/);
    
    if (match) {
      return `+62 ${match[2]}-${match[3]}-${match[4]}`;
    }
  }
  
  return phone;
}
