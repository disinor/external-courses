const arrObjSweet = [];
class Candy {
  constructor() {
    this.edible = true;
    this.open = false;

    return this;
  }
  open() {
    this.open = true;
  }
}

class Sweet extends Candy {
  constructor(name, weight, calorie) {
    super();
    this.name = name;
    this.weight = weight;
    this.calorie = calorie;

    return this;
  }
}

class Present {
  constructor() {
    this.weightPresent = 0;
  }

  addSweet(name, weight, calorie) {
    this.weightPresent = 0;
    arrObjSweet.push(new Sweet(name, weight, calorie));
    arrObjSweet.forEach((e) => {
      const name = e.name;
      this.weightPresent += e.weight;
      this[name] = e;
    });
  }

  sorting() {
    const arrSweet = [];
    for (let key in this) {
      if (this[key].hasOwnProperty('name')) {
        arrSweet.push(this[key]);
      }
    }

    for (let i = 1; i < arrSweet.length; i++) {
      let current = arrSweet[i];
      let replaceable = arrSweet[i - 1];

      if (current.weight >= replaceable.weight) {
        arrSweet[i - 1] = current;
        arrSweet[i] = replaceable;
      }
    }

    return arrSweet;
  }

  search(name) {
    for (let key in this) {
      if (key === name) {
        console.log(this[key]);
      }
    }
  }
}

const present = new Present();

