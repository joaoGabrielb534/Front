import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        supermarket:
          'url(https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg?cs=srgb&dl=pexels-anna-shvets-3962285.jpg&fm=jpg)',
      },
    },
  },
  plugins: [],
}
export default config
