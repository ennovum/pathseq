# pathseq

Dead simple object path to sequence converter.
It breaks a path to an object nested value down to a sequence form.

### Install

`pathseq` is available to download through [NPM](https://www.npmjs.com/package/pathseq).
```
npm install pathseq
```

### Use

```
pathseq(path);
```

**Arguments**

`path` *(string)* object nested value path.

**Returns**

*(array)* object nested value path sequence.

**Examples**

Basic use:
```
const path = 'foo.bar.baz';
const sequence = pathseq(path); // ['foo', 'bar', 'baz']
```
You can work with arrays too:
```
const path = 'foo[1].bar[2][3].baz';
const sequence = pathseq(path); // ['foo', 1, 'bar', 2, 3, 'baz']
```

### Develop

If you want to fork and develop `pathseq`, these commands are for you:
```
npm run dev
npm run test-dev
```

### Test

`pathseq` is equipped with a test suite. You can run it with:
```
npm run test
```

### Licence

MIT
