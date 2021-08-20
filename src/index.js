module.exports = function reverse (n) {
    let result = '';
    let revN = result + n;
    revN = Math.abs(revN);
    revN = result + revN;
    let i = 0;
    while (i < revN.length) {
        result = `${revN[i]}${result}`;
        i += 1;
    }
    return result;
}
  