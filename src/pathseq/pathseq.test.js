import test from 'tape';

import {pathseq} from './pathseq';

test('pathseq / no path', (testCase) => {
    const testScenario = () => {
        const path = null;
        const expectedSeq = null;
        const resultSeq = pathseq(path);

        testCase.deepEqual(expectedSeq, resultSeq);
    };

    testCase.doesNotThrow(testScenario);
    testCase.end();
});

test('pathseq / empty path', (testCase) => {
    const testScenario = () => {
        const path = '';
        const expectedSeq = [];
        const resultSeq = pathseq(path);

        testCase.deepEqual(expectedSeq, resultSeq);
    };

    testCase.doesNotThrow(testScenario);
    testCase.end();
});

test('pathseq / single object path', (testCase) => {
    const testScenario = () => {
        const path = 'foo';
        const expectedSeq = ['foo'];
        const resultSeq = pathseq(path);

        testCase.deepEqual(expectedSeq, resultSeq);
    };

    testCase.doesNotThrow(testScenario);
    testCase.end();
});

test('pathseq / multiple object path', (testCase) => {
    const testScenario = () => {
        const path = 'foo.bar.baz';
        const expectedSeq = ['foo', 'bar', 'baz'];
        const resultSeq = pathseq(path);

        testCase.deepEqual(expectedSeq, resultSeq);
    };

    testCase.doesNotThrow(testScenario);
    testCase.end();
});

test('pathseq / single array path', (testCase) => {
    const testScenario = () => {
        const path = '[1]';
        const expectedSeq = [1];
        const resultSeq = pathseq(path);

        testCase.deepEqual(expectedSeq, resultSeq);
    };

    testCase.doesNotThrow(testScenario);
    testCase.end();
});

test('pathseq / multiple array path', (testCase) => {
    const testScenario = () => {
        const path = '[1][2][3]';
        const expectedSeq = [1, 2, 3];
        const resultSeq = pathseq(path);

        testCase.deepEqual(expectedSeq, resultSeq);
    };

    testCase.doesNotThrow(testScenario);
    testCase.end();
});

test('pathseq / simple mixed path', (testCase) => {
    const testScenario = () => {
        const path = 'foo[1]';
        const expectedSeq = ['foo', 1];
        const resultSeq = pathseq(path);

        testCase.deepEqual(expectedSeq, resultSeq);
    };

    testCase.doesNotThrow(testScenario);
    testCase.end();
});

test('pathseq / complex mixed path', (testCase) => {
    const testScenario = () => {
        const path = 'foo[1].bar[2][3].baz';
        const expectedSeq = ['foo', 1, 'bar', 2, 3, 'baz'];
        const resultSeq = pathseq(path);

        testCase.deepEqual(expectedSeq, resultSeq);
    };

    testCase.doesNotThrow(testScenario);
    testCase.end();
});

test('pathseq / non-initial section starting with array', (testCase) => {
    const testScenario = () => {
        const path = 'foo.[1]';
        const expectedSeq = ['foo', '', 1];
        const resultSeq = pathseq(path);

        testCase.deepEqual(expectedSeq, resultSeq);
    };

    testCase.doesNotThrow(testScenario);
    testCase.end();
});
