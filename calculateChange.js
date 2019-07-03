const calculateChange = function(total, cash) {

  let change = (cash - total) / 100;
  const giveBack = {};
  
  const dollarsObj = {
    twentyDollars: 20,
    tenDollars: 10,
    fiveDollars: 5,
    twoDollars: 2,
    oneDollar: 1,
    quarter: 0.25,
    dime: 0.10,
    nickel: 0.05,
    penny: 0.01
  };

  for (let dollarProp in dollarsObj) {
    if ((Math.floor(change / dollarsObj[dollarProp]) !== 0)) {
      giveBack[dollarProp] = Math.floor(change / dollarsObj[dollarProp]);
      change %= dollarsObj[dollarProp];
    }
  }

  return giveBack;
};


console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));