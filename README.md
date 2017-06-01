## Targeting Set Splitter

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

Testing requires jasmine installed. Installation can be done with npm. You might need to perform as sudo.

```bash
npm install -g jasmine
```
The test script is run as follows.

```bash
jasmine ./test.js
```
