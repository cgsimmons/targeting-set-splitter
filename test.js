const TargetingSetSplitter = require('./targeting-set-splitter');

const testSet = {
  countries: ['hk', 'jp'],
  placements: ['desktop', 'mobile', 'external'],
  gender: 0,
  ageRange: [13, 30],
};
const result = [
  {
  countries: ['hk',],
  placements: ['desktop'],
  gender: 0,
  ageRange: [13, 20]
  },
  {
  countries: ['hk'],
  placements: ['desktop'],
  gender: 0,
  ageRange: [21, 30]
  },
  {
  countries: ['hk',],
  placements: ['mobile'],
  gender: 0,
  ageRange: [13, 20]
  },
  {
  countries: ['hk'],
  placements: ['mobile'],
  gender: 0,
  ageRange: [21, 30]
  },
  {countries: ['hk',],
  placements: ['external'],
  gender: 0,
  ageRange: [13, 20]
  },
  {
  countries: ['hk'],
  placements: ['external'],
  gender: 0,
  ageRange: [21, 30]
  },
  {
  countries: ['jp',],
  placements: ['desktop'],
  gender: 0,
  ageRange: [13, 20]
  },
  {
  countries: ['jp'],
  placements: ['desktop'],
  gender: 0,
  ageRange: [21, 30]
  },
  {
  countries: ['jp',],
  placements: ['mobile'],
  gender: 0,
  ageRange: [13, 20]
  },
  {
  countries: ['jp'],
  placements: ['mobile'],
  gender: 0,
  ageRange: [21, 30]
  },
  {
  countries: ['jp'],
  placements: ['external'],
  gender: 0,
  ageRange: [13, 20]
  },
  {
  countries: ['jp'],
  placements: ['external'],
  gender: 0,
  ageRange: [21, 30]
  }
];
t = new TargetingSetSplitter();
console.log(JSON.stringify(t.split(testSet)) === JSON.stringify(result));
