function Hangman(string) {
    this.originalString = string;
    this.word = this.originalString.toLowerCase().split('');
    this.numberOfErrors = 6;
    this.arrErrorsWord = [];
  
    this.transitionToLowerCase = () => {
      for (let i = 0; i < this.originalString.length; i++) {
        this.word[i] = '_';
      }

      return this;
    };
  
    this.transitionToLowerCase();
    this.guess = (letter) => {
      let numWord = 0;
      for (let i = 0; i < this.word.length; i++) {
        if (this.originalString[i] === letter) {
          this.word[i] = letter;

          console.log(this.getGuessedString());
          numWord += 1;
        }
  
        if (i === this.word.length - 1 && numWord > 0) {

          return this;
        }
  
        if (i === this.word.length - 1) {
          if (this.word[i] !== letter) {
            this.numberOfErrors -= 1;

            if (this.numberOfErrors === 0) {
              console.log('Game Over');
              this.originalString = undefined;

              return this
            }

            this.arrErrorsWord.push(letter);
            numWord += 1;

            console.log(
              `errors left ${this.numberOfErrors} | ${this.arrErrorsWord}`
            );
          }
        }
      }

      return this;
    };
  
    this.getGuessedString = () => {

      return this.word.join('');
    };
  
    this.getErrorsLeft = () => {
      console.log(this.numberOfErrors);

      return this.numberOfErrors;
    };
  
    this.getWrongSymbols = () => {
      console.log(this.arrErrorsWord);

      return this.arrErrorsWord;
    };
  
    this.getStatus = () => {
      console.log(`${this.word.join('')}| errors left ${this.numberOfErrors} `);

      return `${this.word.join('')}| errors left ${this.numberOfErrors} `;
    };
  
    this.startAgain = (newString) => {
      this.originalString = newString;
      this.word = this.originalString.toLowerCase().split('');
      this.transitionToLowerCase();
      this.numberOfErrors = 6;
      this.arrErrorsWord = [];

      return this;
    };
  }
  
const hangman =new Hangman()

module.exports = hangman;