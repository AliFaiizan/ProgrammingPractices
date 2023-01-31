 String.prototype.toJadenCase = () => {
    return this.split(' ').map(word =>{return word[0].toUpperCase()+word.slice(1)}).join(' ');
 }
  let test='this is sparta';
    console.log(test.toJadenCase())