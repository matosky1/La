let age = document.getElementById("age");
parseInt(age.value);
 
const promiseFunction = (a) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(a > 18){
                resolve('Adult')
            }else{
                reject('Only Adult can visit this page')
            }
        }, 3000)
   
    })
}
 
    let click = document.getElementById("click").addEventListener("click", ()=> {
    let info = document.getElementById("info");
    promiseFunction(age.value)
   .then((res)=>{
       info.innerHTML= res;
   })
   .catch((rej)=>{
       info.innerHTML= rej;
   })
})