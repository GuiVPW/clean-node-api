export default {
	roots: ['<rootDir>/src'],
	collectCoverageFrom: [
		'<rootDir>/src/**/*.ts',
		'!<RootDir>/src/main/**',
		'!<RootDir>/src/presentations/protocols/**'
	],
	coverageDirectory: 'coverage',
	coverageProvider: 'v8',
	testEnvironment: 'node',
	transform: {
		'.+\\.ts$': 'ts-jest'
	},
	preset: '@shelf/jest-mongodb',
	watchPathIgnorePatterns: ['globalConfig']
}
