console.log('Hola mundo')

setTimeout(() => {
    console.log('hola mundo dentro de un timeout');
}, 5000)

console.log('Como estan?');


/* Promise  */

let dollar = 0;

setTimeout(() => {

    const newPromise = new Promise((resolve, reject) => { 
        if(dollar > 0) {

            resolve('Gracias por esos dolares ' + dollar);
        }else{

            reject('No tengo dinero');
        }
            

    })
    newPromise
    .then((respuesta)=> {
        console.log(respuesta)
    } ).catch(err => console.log(err));
}, 3000)

 let galleta = 'canela'
setTimeout(() =>{
    const galletas = new Promise((resolve, reject)=>{
        if(galleta === 'canela'){

            resolve('si tiene sabor a canela')
        }else{
            reject('no tiene sabor a galleta')
        }
    })

    galletas
    .then((respuestaDeGalletas) =>{
        
        console.log(respuestaDeGalletas)
    })
    .catch(error =>  console.log(error));
} , 3000)