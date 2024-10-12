import type { Config } from "tailwindcss";

const {
	default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
	// Merging the content arrays and removing duplicates
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/**/*.{ts,tsx}",
	],
	// Enabling dark mode
	darkMode: "class", // Assuming you want to enable dark mode based on the class strategy
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			},
			colors: {
				rose: 'rgb(183, 110, 121)',
				roseGold: {
					light: 'rgb(244, 194, 194)',
					DEFAULT: 'rgb(183, 110, 121)',
					dark: 'rgba(244, 194, 194, 0.7)',
					metallic: 'rgb(228, 183, 180)',
					accent: 'rgb(255, 228, 225)'
				},
				warmWhite: 'rgb(253, 248, 246)',
				softWhite: {
					'50': '#fafafa',
					'100': '#f5f5f5',
					'200': '#eeeeee',
					'300': '#e0e0e0',
					'400': '#bdbdbd',
					'500': '#9e9e9e'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'background-shine': {
					from: {
						backgroundPosition: '0 0'
					},
					to: {
						backgroundPosition: '-200% 0'
					}
				},
				'bounce-more': {
					'0%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(30px)'
					},
					'100%': {
						transform: 'translateY(0px)'
					}
				},
				'border-beam': {
					'100%': {
						'offset-distance': '100%'
					}
				},
				'logo-cloud': {
					from: {
						transform: 'translateX(0)'
					},
					to: {
						transform: 'translateX(calc(-100% - 50rem))'
					}
				},
				orbit: {
					'0%': {
						transform: 'rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)'
					},
					'100%': {
						transform: 'rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)'
					}
				},
				meteor: {
					'0%': {
						transform: 'rotate(290deg) translateX(0)'
					},
					'100%': {
						transform: 'rotate(290deg) translateX(-1440px)',
						opacity: '0'
					}
				},
				meteorMobile: {
					'0%': {
						transform: 'rotate(300deg) translateX(0)'
					},
					'100%': {
						transform: 'rotate(300deg) translateX(-1440px)',
						opacity: '0'
					}
				},
				gradient: {
					to: {
						backgroundPosition: 'var(--bg-size) 0'
					}
				},
				shimmer: {
					'0%, 90%, 100%': {
						'background-position': 'calc(-100% - var(--shimmer-width)) 0'
					},
					'30%, 60%': {
						'background-position': 'calc(100% + var(--shimmer-width)) 0'
					}
				},
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				buttonheartbeat: {
					'0%': {
						'box-shadow': '0 0 0 0 theme("colors.rose")'
					},
					'50%': {
						'box-shadow': '0 0 0 7px theme("colors.rose/0")'
					},
					'100%': {
						'box-shadow': '0 0 0 0 theme("colors.rose/0")'
					}
				},
				marquee: {
					from: {
						transform: 'translateX(0)'
					},
					to: {
						transform: 'translateX(calc(-100% - var(--gap)))'
					}
				},
				'marquee-vertical': {
					from: {
						transform: 'translateY(0)'
					},
					to: {
						transform: 'translateY(calc(-100% - var(--gap)))'
					}
				},
				shine: {
					'0%': {
						'background-position': '0% 0%'
					},
					'50%': {
						'background-position': '100% 100%'
					},
					to: {
						'background-position': '0% 0%'
					}
				}
			},
			transitionDuration: {
				'400': '400ms',
				'500': '500ms',
				'600': '600ms'
			},
			animation: {
				'logo-cloud': 'logo-cloud 30s linear infinite',
				orbit: 'orbit calc(var(--duration)*1s) linear infinite',
				gradient: 'gradient 8s linear infinite',
				shimmer: 'shimmer 8s infinite',
				meteor: 'meteor 5s linear infinite',
				meteorMobile: 'meteorMobile 5s linear infinite',
				buttonheartbeat: 'buttonheartbeat 2s infinite ease-in-out reverse',
				'bounce-more': 'bounce-more 3s infinite ease-in-out',
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
				'background-shine': 'background-shine 2s linear infinite',
				marquee: 'marquee var(--duration) infinite linear',
				'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
				shine: 'shine var(--duration) infinite linear'
			}
		}
	},
	// Merging plugins, adding any unique plugins from both files
	plugins: [
		require("tailwindcss-animate"), // Assuming require is resolved in your environment
		// Add other unique plugins here
	],
};

export default config;
