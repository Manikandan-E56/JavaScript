/* task 1 factorial */

const number=5;

function fact(number){
if(number==0)return 1;
return number=number*fact(number-1);


}
const ans=fact(number)
console.log(number,"is factorial:",ans);


/* task 2 fibbo */
const fibbo=10;

const fans=[];
 for(let i=0;i<fibbo;i++){
    fans.push(fib(i));
 }
function fib(number){
    if(number==1)return 1;
    if(number ==0)return 0;
    return fib(number-1)+fib(number-2);

    
}
console.log("Fibonacci ",fans);

/* task 3  */