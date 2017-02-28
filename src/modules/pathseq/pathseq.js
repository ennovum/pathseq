const SECTION_CLEAN_REGEXP = /\]/g;
const SECTION_SPLIT_REGEXP = /\[/g;

function pathseq(path) {
    const sections = path.split('.');

    const sequence = sections.reduce((sequence, section, level) => {
        const parts = section
            .replace(SECTION_CLEAN_REGEXP, '')
            .split(SECTION_SPLIT_REGEXP);
        const [objectKey, ...arrayKeys] = parts;

        if (level || objectKey) {
            sequence.push(objectKey);
        }

        arrayKeys.forEach((arrayKey) => {
            const index = eval.call(null, arrayKey);
            sequence.push(index);
        });

        return sequence;
    }, []);

    return sequence;
}

export default pathseq;
export {pathseq};
