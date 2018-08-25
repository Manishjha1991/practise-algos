// Write Two Function who is independent

function A(){
    return new Promise((resolve,reject)=>{
        resolve(1)
    })
    // return 1;
}
function B(){
    return new Promise((resolve,reject)=>{
        resolve(2)
    })
}

// Write Two Function Who Have Dependency of 


async function C(A,B){
    return A+B
  
  }
  async function D(C){
      return C*100
  }

  

let functionC = async function(){
    let x  =  await Promise.all([A(),B()]);
    return await D(await C(x[0],x[1]))
    
}
functionC().then(data=>{
    
    return data;
    
})

