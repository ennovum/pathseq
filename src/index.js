import pathseq from './pathseq/pathseq';

export default pathseq;
export {pathseq};

// Webpack can't export default ESM properly (planned for 2.4 release)
try {
    module.exports = pathseq;
} catch (err) {
    err; // noop
}
