import type { Config } from '@jest/types'

export default async (): Promise<Config.InitialOptions> => {
	return {
		testMatch: ['**/*.test.ts'],
		transform: {
			'.+\\.ts$': 'ts-jest'
		}
	}
}
