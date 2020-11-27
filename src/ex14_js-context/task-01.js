function Calculator() {
  this.presentValue = 0;

  this.fetchData = async (callBack) => {
    const pr = new Promise((resolve) => {
      setTimeout(() => {
        this.setState(500);
        resolve();
      }, 500);
    });

    await pr;

    return this;
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
