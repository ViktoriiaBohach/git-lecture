let a = 5;
let b = 3;
c = a + b;

console.log (c);

a = 8;
b = 12;
c = a + b;

console.log (c);

function sum (a, b){
  let  c = a + b;
  console.log (c);
}

sum (3, 10);
sum (3, 20);

let a1 = 10;
let a2 = 20;
sum (a1, a2);

function myFun (a, b){
    let  c = a + b;
    return c;
  }
  console.log (myFun(3, 10))

  function someName (a, b){
    let  c = a + b;
    console.log (c);
  }

  const anonimFunc = function (a, b){
    let  c = a + b;
    return c;
  }

  let a3 = 2;
  let b3 = 3;

//  стрілкова анонімна функція ()=>{}

// (a, b) => {  // неробочий варіант функції
//     let  c = a + b;
//     console.log (c); 
// }

const arrowFunc = (a, b) => { 
    let  c = a + b;
    console.log (c);
   
}
arrowFunc(1, 2);


const functionWithDefaultParams = (a, b) => { 
return (a*b);
}
console.log(functionWithDefaultParams(2,3));


const functionWithDefaultParams1 = (a, b=3) => { 
    return (a*b);
    }
    console.log(functionWithDefaultParams1(2));


    const functionWithDefaultParams2 = (a, b=3) => { 
        return (a*b);
        }
        console.log(functionWithDefaultParams2(2,5));

        const playWithReturn = () => { 
            for (let i = 0; i < 10; i++){
            console.log(i);
                if(i === 6){
                 break; // так само можно використати return      
            }

            }
        }
        playWithReturn();

        const playWithReturn1 = () => { 
            for (let i = 0; i < 10; i++){
            console.log(i);
                if(i === 6){
                 break; // так само можно використати return      
            }
            console.log('end');
            }
        }
        playWithReturn1();

        console.log(Date());