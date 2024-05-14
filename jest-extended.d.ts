/* https://jest-extended.jestcommunity.dev/docs/getting-started/setup#vitest-typescript-types-setup */
/* https://vitest.dev/api/expect.html#expect-extend */

import type CustomMatchers from 'jest-extended';
import 'vitest';

declare module 'vitest' {
    interface Assertion<T = any> extends CustomMatchers<T> {}
    interface AsymmetricMatchersContaining<T = any> extends CustomMatchers<T> {}
    interface ExpectStatic extends CustomMatchers<T> {}
}
