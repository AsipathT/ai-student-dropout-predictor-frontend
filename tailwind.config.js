/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        sidebar: '#0F172A',
        workspace: '#F8FAFC',
        brand: '#6366F1',
        'exam-anxiety': '#E11D48',
        'conceptual-confusion': '#F59E0B',
        'academic-helplessness': '#8B5CF6',
        'motivation-erosion': '#64748B',
        'risk-critical': '#E11D48',
        'risk-high': '#F59E0B',
        'risk-medium': '#FBBF24',
        'risk-low': '#10B981',
        'trajectory-stable': '#10B981',
        'trajectory-improving': '#3B82F6',
        'trajectory-declining': '#F59E0B',
        'trajectory-volatile': '#E11D48',
        'c1-accent': '#8B5CF6',
        'c2-accent': '#3B82F6',
        'c3-accent': '#6366F1',
        'c4-accent': '#7C3AED',
        'stream-c1': '#8B5CF6',
        'stream-c2': '#3B82F6',
        'stream-academic': '#6366F1',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-in': 'slideIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-10px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
