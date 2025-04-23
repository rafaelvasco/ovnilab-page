
export const animations = {
  keyframes: {
    'accordion-down': {
      from: { height: '0' },
      to: { height: 'var(--radix-accordion-content-height)' }
    },
    'accordion-up': {
      from: { height: 'var(--radix-accordion-content-height)' },
      to: { height: '0' }
    },
    float: {
      '0%, 100%': { transform: 'translateY(0)' },
      '50%': { transform: 'translateY(-10px)' }
    },
    pulse: {
      '0%, 100%': { opacity: '1' },
      '50%': { opacity: '0.7' }
    },
    shimmer: {
      '0%': { backgroundPosition: '-100% 0' },
      '100%': { backgroundPosition: '200% 0' }
    },
    fadeIn: {
      '0%': { opacity: '0', transform: 'translateY(20px)' },
      '100%': { opacity: '1', transform: 'translateY(0)' }
    },
    fadeInLeft: {
      '0%': { opacity: '0', transform: 'translateX(-20px)' },
      '100%': { opacity: '1', transform: 'translateX(0)' }
    },
    fadeInRight: {
      '0%': { opacity: '0', transform: 'translateX(20px)' },
      '100%': { opacity: '1', transform: 'translateX(0)' }
    },
    scaleIn: {
      '0%': { opacity: '0', transform: 'scale(0.95)' },
      '100%': { opacity: '1', transform: 'scale(1)' }
    },
    blink: {
      '0%, 100%': { opacity: '1' },
      '50%': { opacity: '0.2' }
    }
  },
  animation: {
    'accordion-down': 'accordion-down 0.2s ease-out',
    'accordion-up': 'accordion-up 0.2s ease-out',
    'float': 'float 5s ease-in-out infinite',
    'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    'shimmer': 'shimmer 2s linear infinite',
    'fade-in': 'fadeIn 0.7s ease-out forwards',
    'fade-in-left': 'fadeInLeft 0.7s ease-out forwards',
    'fade-in-right': 'fadeInRight 0.7s ease-out forwards',
    'scale-in': 'scaleIn 0.5s ease-out forwards',
    'blink': 'blink 1.5s infinite'
  }
};
