/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    roots: ['<rootDir>'],
    testMatch: ['**/__tests__/**/*.+(ts)', '**/?(*.)+(spec|test).+(ts)'],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest'
    }
};
