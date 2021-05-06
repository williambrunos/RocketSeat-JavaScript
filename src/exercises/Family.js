const family = {
  spends: [],
  earnings: [],
};

family.spends.push(40);
family.spends.push(90);
family.earnings.push(120);
family.earnings.push(200);

let amount = 0, amountSpent = 0, amountEarned = 0;

for(let spend of family.spends) {
  amountSpent += spend;
}

for(let earn of family.earnings) {
  amountEarned += earn;
}

amount = amountEarned - amountSpent;
console.log("Saldo: R$"+amount.toFixed(2));

if(amount >= 0) {
  console.log("Saldo positivo!");
} else {
  console.log("Saldo negativo!");
}