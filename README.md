# pathseq
Dead simple object path to sequence converter.

### Use
`pathseq` is a function that provided with a path to an object's value breaks it down to a sequence form.

```
const path = 'foo.bar.baz';
const sequence = pathseq(path); // ['foo', 'bar', 'baz']
```
You can work with arrays too.
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
