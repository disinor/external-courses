function Calculator() {
  this.presentValue = 0;

  this.fetchData = async (callBack) => {
    setTimeout(callBack.bind(this, 500), 500);
  };

  this.getResult = () => {
    return this.presentValue;
  };

  this.reset = () => {
    this.presentValue = 0;

    return this;
  };

  this.add = (a = 0) => {
    this.presentValue += a;

    return this;
  };

  this.subtract = (a = 0) => {
    this.presentValue -= a;

    return this;
  };

  this.divide = (a = 1) => {
    this.presentValue /= a;

    return this;
  };

  this.multiply = (a = 1) => {
    this.presentValue *= a;

    return this;
  };

  this.setState = (num) => {
    if (!num) {
      return this;
    }

    this.presentValue = num;

    return this;
  };
}

const calc = new Calculator();

module.exports = calc;
/*   const func = function(num) {
  this.setState(num);
  
  return this
  
  }; */
