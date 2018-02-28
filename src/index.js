module.exports = function solveEquation(equation) {
  var eqArr = equation.split(' '),
    a, b, c, d, x1, x2,
    solArr = [];

  for (var i = 0; i < eqArr.length; i++) {
    if(i == 0) {
      a = eqArr[i];
    } else if (i+1 == eqArr.length) {
      c = eqArr[i];

      if (eqArr[i-1] == '-') {
        c = eqArr[i-1]+c;
      }
    } else {
      if (eqArr[i] == 'x' && eqArr[i-1] == '*') {
        b = eqArr[i-2];

        if (eqArr[i-3] == '-') {
          b = eqArr[i-3]+b;
        }
      }
    }
  }

  if (a != undefined && b != undefined && c != undefined) {
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);
    d = Math.pow(b,2)-(4*a*c);

    if (d > 0) {
      x1 = Math.round((-b+Math.sqrt(d))/(2*a));
      x2 = Math.round((-b-Math.sqrt(d))/(2*a));

      if (x1 > x2) {
        solArr = [x2, x1];
      } else {
        solArr = [x1, x2];
      }
    }
  }

  return solArr;
}
