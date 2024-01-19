import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'focus': '1px 1px 2px green'
      },
      maxWidth: {
        '100p': '100px'
      }
    },
    colors: {
      "blue": {
        400: "#60a5fa",
        600: "#2563eb",
        800: "#1e40af",
        900: "#1e3a8a",
        950: "#172554" 
      },
      "gray": {
        400: "#9ca3af",
        600: "#4b5563",
        800: "#334155"
      },
      "white": {
        0: "#FFF",
      },
      "green": {
        500: "#22c55e"
      },
      "teste": {
        0: "#0000"
      }
    }
  },
  plugins: [],
}
export default config
