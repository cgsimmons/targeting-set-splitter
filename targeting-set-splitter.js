/**
 * Ad splitting class.
 * Author: Chris Simmons
 **/
class TargetingSetSplitter {

  static get defaultRestrictions() {
    return {
      countries: { min: 1, max: 200, type: "array" },
      placements: { min: 1, max: 6, type: "array" },
      gender: { min: 0, max: 2, type: "integer" },
      ageRange: { min: 5, max: 100, type: "range" }
    };
  }

  /**
   * @constructor
   * @param {object} restrictions - Custom restriction settings.
   *   Restrictions must contain 'min', 'max', and 'type'.
   *   Type is used to select the proper validity method.
   *   Example:
   *    t = new TargetingSetSplitter({ countries: { min: 1, max: 5, type: "array" } });
   **/
  constructor(restrictions) {
    this.restrictions = Object.assign({}, TargetingSetSplitter.defaultRestrictions, restrictions);
  }

  /** Split a target set of data.
   * @param {object} targetSet - Set of data to split.
   * @return {array} The array of set objects after performing the split.
   **/
  split(targetSet) {
    let results = [];
    try {
      this.checkInput(targetSet);
      results = this.performSplit(targetSet);
    }
    catch(err) {
      console.log("Invalid input: ", err);
    }
    return results;
  }

  /** Generate array of split objects */
  performSplit(targetSet) {
    let results = [];
    for (let country in targetSet['countries']) {
      for (let placement in targetSet['placements']) {
        let genderRange = this.getGenderRange(targetSet['gender']);
        for (let gender in genderRange) {
          let range = this.getAgeRange(targetSet['ageRange']);
          for (let ageRange in range) {
            results.push(
              {
                countries: new Array(targetSet['countries'][country]),
                placements: new Array(targetSet['placements'][placement]),
                gender: genderRange[gender],
                ageRange: range[ageRange],
              });
          }
        }
      }
    }
    return results;
  }

  /** Special split for gender */
  getGenderRange(gender) {
    if (gender == 0) {
      return [0];
    } else if (gender == 1) {
      return [1];
    } else if (gender == 2) {
      return [0, 1];
    } else {
      throw "Gender categories must be 0, 1, or 2 (for both)."
      return null;
    }
  }

  /** Special split for age ranges by using numbers divisibly by 10 as break point. */
  getAgeRange(age) {
    let results = [];
    let tmpMin = age[0];
    let tmpMax = tmpMin + 1;
    const max = age[1];
    while (tmpMax < max) {
      if (tmpMax % 10 == 0) {
        results.push([tmpMin, tmpMax]);
        tmpMin = tmpMax + 1
      }
      tmpMax += 1
    }
    results.push([tmpMin, max]);
    return results;
  }

  /** Validate restrictions */
  checkInput(set) {
    for (let key in set) {
      if (this.restrictions[key] === undefined) {
        throw "Set category [" + key + "] has no assigned restrictions.";
      }
      else if (this.restrictions[key]["type"] === undefined) {
        throw "Set category [" + key + "] restriction must contain a type.";
      }
      else if (typeof this.restrictions[key]["type"] != 'string'){
        throw "Set category [" + key + "] restriction must have 'type' element that is a string."
      }
      else {
        this.checkMinMax(key);
        switch(this.restrictions[key]["type"]) {
          case "array":
            this.checkArray(set, key);
            break;
          case "integer":
            this.checkInteger(set, key);
            break;
          case "range":
            this.checkRange(set, key);
            break;
          default:
            throw "Set category [" + key + "] has invalid type [" + this.restrictions[key]["type"] + "].";
        }
      }
    }
  }

  /** Validate min and max restrictions for a giving key */
  checkMinMax(key){
    const min = this.restrictions[key]["min"];
    const max = this.restrictions[key]["max"];
    if (min === undefined || max === undefined) {
      throw "Restrictions for [" + key + "] must contain 'min' and 'max'.";
    }
    else if (isNaN(min) || isNaN(max)) {
      throw "Restriction for [" + key + "] must have 'min' and 'max' as integers."
    }
    else if (min > max) {
      throw "Restrictions for [" + key + "] must have a 'min' less than or equal to 'max'.";
    }
  }

  /** Validate array types. */
  checkArray(set, key) {
    const min = this.restrictions[key]["min"];
    const max = this.restrictions[key]["max"];
    const len = set[key].length;
    if (len < min || len > max) {
      throw ("Set category [" + key + "] has " + len + " elements." + "\n"
        + "Valid range is between " + min + " and " + max + ".");
    }
  }

  /** Validate integer types. */
  checkInteger(set, key) {
    const min = this.restrictions[key]["min"];
    const max = this.restrictions[key]["max"];
    const val = set[key];
    if (val < min || val > max) {
      throw ("Set category [" + key + "] value equals" + val + "." + "\n"
        + "Valid range is between " + min + " and " + max + ".");
    }
  }

  /** Validate range types. */
  checkRange(set, key) {
    const min = this.restrictions[key]["min"];
    const max = this.restrictions[key]["max"];
    const len = set[key].length;
    if (len != 2) {
      throw "Set category [" + key + "] must contain exactly 2 numbers for a valid range."
    }
    const keyMin = set[key][0];
    const keyMax = set[key][1];
    if (keyMin < min || keyMax > max) {
      throw ("Set category [" + key + "] has range [" + keyMin + ", " + keyMax + "].\n"
        + "Valid range is between " + min + " and " + max + ".");
    }
  }
}

module.exports = TargetingSetSplitter;
