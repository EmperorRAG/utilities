/// <reference types="vitest/config" />
import type { UserConfig } from 'vite';

export default {
	build: {
		lib: {
			entry: 'src/index.ts',
			name: 'Utilities',
			fileName: 'utilities',
			formats: ['es', 'umd'],
		},
		rollupOptions: {
			external: ['vitest'],
			output: {
				globals: {
					vitest: 'Vitest',
				},
			},
		},
	},
} satisfies UserConfig;
