const TargetingSetSplitter = require('./targeting-set-splitter');

const testSet1 = {
  countries: ['hk', 'jp'],
  placements: ['desktop', 'mobile', 'external'],
  gender: 0,
  ageRange: [13, 30],
};
const testSet2 = {
  countries: ['hk', 'jp'],
  placements: ['desktop', 'mobile', 'external'],
  gender: 1,
  ageRange: [13, 30],
};
const testSet3 = {
  countries: ['hk', 'jp'],
  placements: ['desktop', 'mobile', 'external'],
  gender: 2,
  ageRange: [13, 30],
};

const result1 = [
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
const result2 = [
  {
  countries: ['hk',],
  placements: ['desktop'],
  gender: 1,
  ageRange: [13, 20]
  },
  {
  countries: ['hk'],
  placements: ['desktop'],
  gender: 1,
  ageRange: [21, 30]
  },
  {
  countries: ['hk',],
  placements: ['mobile'],
  gender: 1,
  ageRange: [13, 20]
  },
  {
  countries: ['hk'],
  placements: ['mobile'],
  gender: 1,
  ageRange: [21, 30]
  },
  {countries: ['hk',],
  placements: ['external'],
  gender: 1,
  ageRange: [13, 20]
  },
  {
  countries: ['hk'],
  placements: ['external'],
  gender: 1,
  ageRange: [21, 30]
  },
  {
  countries: ['jp',],
  placements: ['desktop'],
  gender: 1,
  ageRange: [13, 20]
  },
  {
  countries: ['jp'],
  placements: ['desktop'],
  gender: 1,
  ageRange: [21, 30]
  },
  {
  countries: ['jp',],
  placements: ['mobile'],
  gender: 1,
  ageRange: [13, 20]
  },
  {
  countries: ['jp'],
  placements: ['mobile'],
  gender: 1,
  ageRange: [21, 30]
  },
  {
  countries: ['jp'],
  placements: ['external'],
  gender: 1,
  ageRange: [13, 20]
  },
  {
  countries: ['jp'],
  placements: ['external'],
  gender: 1,
  ageRange: [21, 30]
  }
];

describe('TargetSetSplitter', ()=> {
  t = new TargetingSetSplitter();
  it('passes provided test case', ()=> {
    expect(JSON.stringify(t.split(testSet1))).toEqual(JSON.stringify(result1));
  });
  it('passes gender == 1', ()=> {
    expect(JSON.stringify(t.split(testSet2))).toEqual(JSON.stringify(result2));
  });
  it('passes gender == 2', ()=> {
    expect(JSON.stringify(t.split(testSet2))).toEqual(JSON.stringify(Object.assign(result1, result2)));
  });
});
