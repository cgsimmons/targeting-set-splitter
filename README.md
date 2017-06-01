## Targeting Set Splitter
By Chris Simmons

Split ad sets.

## Installation

Import the module as below. Then you can create an instance and call split.

```javascript
const TargetingSetSplitter = require('./targeting-set-splitter');
t = new TargetingSetSplitter();
t.split({
  countries: ['hk', 'jp'],
  placements: ['desktop', 'mobile', 'external'],
  gender: 0,
  ageRange: [13, 30],
});
```

## Custom Restrictions
Custom settings can be passed to the constructor like below.

```javascript
 t = new TargetingSetSplitter({ countries: { min: 1, max: 5, type: "array" } });
```
Restrictions must contain '**min**', '**max**', and '**type**'.
Type is used to select the proper validity method.

## Testing

Simply run the test script for a simple test. If successful, **true** will print to the console.

```bash
node ./test.js
```

This will print **true** on valid execution of test.
