let num = 80;

// while 
while (num<85) {
console.log(num);
num++;
}

// do - while
let num2 = 80;
do {
    console.log(num);
    num++;  
} while (num<85) 

// for
for (let i = 1; i < 8; i++ ){
    console.log(i)
}

let num3 = 80;
for (let i = 1; i < 8; i++ ){
    console.log(num3)
    num3++;
}

let num4 = 80;
for (let i = 1; i > 0; i++ ){
    console.log(num4)
    num4++;
}

let num5 = 80;
for (let i = 1; i < 8; i++ ){
    if (num5===85)
    break;
    console.log(num5)
    num5++;
}

let num6 = 80;
for (let i = 1; i < 8; i++ ){
    if (num6===85)
    break;
}
    console.log(num6)
    num6++;


for (let i = 1; i < 8; i++ ){
    if (i===5){
    continue;
}
    console.log(i);

}

for (let i = 0; i < 3; i++ ){
    console.log(i);
    
    for (let j = 0; j < 3; j++ ){
    console.log(j);
    }
}