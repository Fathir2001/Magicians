/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
        xl: '2.5rem',
        '2xl': '3rem'
      }
    },
    fontFamily: {
      display: ['Poppins', 'system-ui', 'sans-serif'],
      body: ['Inter', 'system-ui', 'sans-serif']
    },
    extend: {
      colors: {
        brand: {
          50: '#f5f6f6',
          100: '#eceeee',
          200: '#d2d6d8',
          300: '#aeb4b8',
          400: '#7d858b',
          500: '#4d565d',
          600: '#363d42', // light charcoal
          700: '#2b3033', // charcoal
          800: '#202325', // gunmetal
          900: '#161819'  // near black
        },
        flame: {
          50: '#fff3eb',
          100: '#ffe3d1',
          200: '#ffc3a3',
          300: '#ff9a64',
          400: '#ff7b34',
          500: '#ff6a1f', // primary flame
          600: '#f35515',
          700: '#d6430f',
          800: '#b23512',
          900: '#5a1a06'
        },
        ember: {
          400: '#ff8c32',
          500: '#ff7a24',
          600: '#f2651b'
        },
        highlight: {
          500: '#d01818'
        },
        surface: {
          50: '#0f1112',
          100: '#141718',
          200: '#1b1f21',
          300: '#24292b',
          400: '#2e3437',
          500: '#394247'
        }
      },
      boxShadow: {
        'soft': '0 4px 24px -2px rgba(0,0,0,0.06)',
        'glow': '0 0 0 3px rgba(78,201,159,0.35)',
      },
      backdropBlur: {
        xs: '2px'
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(-4%)' },
          '50%': { transform: 'translateY(6%)' }
        }
      },
      gradients: {
        'brand-radial': 'radial-gradient(circle at 30% 30%, rgba(255,106,31,0.18), transparent 70%)'
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.glass-panel': {
          'background': 'rgba(255,255,255,0.08)',
          'backdrop-filter': 'blur(12px)',
          '-webkit-backdrop-filter': 'blur(12px)',
          'border': '1px solid rgba(255,255,255,0.15)'
        },
        '.text-gradient': {
          'background-image': 'linear-gradient(90deg,#ff6a1f,#ff8c32)',
          '-webkit-background-clip': 'text',
          'color': 'transparent'
        }
      })
    }
  ],
}
