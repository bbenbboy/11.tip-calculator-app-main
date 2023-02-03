"use strict";

function split(num, people, tips, custom) {
  let amountPerson = num / people;
  let tipsPerson = (amountPerson * tips).toFixed(2);
  let tipsPersonInt = tipsPerson / 1;
  let sumAmount = Math.floor(amountPerson + tipsPersonInt).toFixed(2);

  console.log(amountPerson);
  console.log(tipsPerson);
  console.log(sumAmount);
}
split(142.55, 5, 0.15);
