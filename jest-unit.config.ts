import type { Config } from '@jest/types'

export default async (): Promise<Config.InitialOptions> => {
	return {
		testMatch: ['**/*.spec.ts'],
		transform: {
			'.+\\.ts$': 'ts-jest'
		}
	}
}
