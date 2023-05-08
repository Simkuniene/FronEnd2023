const num = process.argv;
console.log(num);

const rand = Math.floor(Math.random() * num[2]) + 1 ;

console.log(rand);

function rand_num(num) {
    const rand = Math.floor(Math.random() * num[2]) + 1 ;
    console.log(rand);
}
rand_num(process.argv);
   


