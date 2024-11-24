const productos= [
    {
        id:'1',
        name:'Random 1',
        stock:10,
        price:505,
        description:'jksnkasjnkasd',
        img:'cafeAmericano.jpg',
        category:'nuevos'
    },
    {
        id:'2',
        name:'Random 2',
        stock:15,
        price:500,
        description:'jksnkasjnkasd',
        img:'cafeCapuccino.jpg',
        category:'ofertas'
    },
    {
        id:'3',
        name:'Random 3',
        stock:20,
        price:600,
        description:'jksnkasjnkasd',
        img:'cafeIntenso.jpg',
        category:'mas vendidos'
    }
]

export const getProducts = () =>{
    let error = false
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if(error){
                reject('Hubo un error, intente mas tarde')
            }else{
                resolve(productos)
            }
        },3000)
    })
}