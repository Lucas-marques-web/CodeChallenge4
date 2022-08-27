
const billValue =430;
const tip  = billValue >=50 && billValue <= 300 ? billValue*(15/100) : billValue*(20/100);
console.log(`O valor da conta é ${billValue} e a gorjeta é ${tip} e o total a ser pago é ${billValue+tip}`)