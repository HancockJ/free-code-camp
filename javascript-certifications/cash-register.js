//Cash Register
//Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

//cid is a 2D array listing available currency.

//The checkCashRegister() function should always return an object with a status key and a change key.

//Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

//Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

//Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

function calculateChange(change, cid){
  let remaining = change;
  let currency =
  [["ONE HUNDRED", 100], ["TWENTY", 20], ["TEN", 10], ["FIVE", 5], ["ONE", 1], ["QUARTER", .25], ["DIME", .1], ["NICKEL", .05], ["PENNY", .01]]
  let changeDue =   [["ONE HUNDRED", 0], ["TWENTY", 0], ["TEN", 0], ["FIVE", 0], ["ONE", 0], ["QUARTER", 0], ["DIME", 0], ["NICKEL", 0], ["PENNY", 0]]

  while(remaining > 0){
    let forceBreak = false;
    for(let i = 0; i < currency.length; i++){
      if(remaining >= currency[i][1] && cid[i][1] > 0){
        changeDue[i][1] += currency[i][1];
        remaining = (remaining - currency[i][1]).toFixed(2);
        cid[i][1] -= currency[i][1];
        forceBreak = true;
        break;
      }
    }
    if(!forceBreak){
      return {status: "INSUFFICIENT_FUNDS", change: []}
    }
  }
  return {status: "OPEN", change: changeDue.filter(currency => currency[1] > 0)}
}

function checkCashRegister(price, cash, cid) {
  let change = cash - price;
  let drawerTotal = cid.reduce((previous, current) => previous + current[1], 0).toFixed(2);

  if(change > drawerTotal){
      return {status: "INSUFFICIENT_FUNDS", change: []}
  } else if (change == drawerTotal){
    return {status: "CLOSED", change: cid}
  } else{
    return calculateChange(change, cid.reverse())
  }
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
