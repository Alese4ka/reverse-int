module.exports = function reverse (n) {
    let result = '';
    let revN = result + n;
    
    let i = 0;
    while (i < revN.length) {
      result = `${revN[i]}${result}`;
      i += 1;
    }
    return result;
  }
  