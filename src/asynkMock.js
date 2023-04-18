const categories = [
    {
        id: "1", 
        name: "cuadrado embutir",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjLyaQFTo5lMAZkzyuR0pBX5wrTuHMXl14DA&usqp=CAU"
    },
    {
        id: "2",
        name: "circular embutir",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjLyaQFTo5lMAZkzyuR0pBX5wrTuHMXl14DA&usqp=CAU"
    },
    {
        id: "3",
        name: "circular empotrable",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjLyaQFTo5lMAZkzyuR0pBX5wrTuHMXl14DA&usqp=CAU"
    },
    {
        id: "4",
        name: "cuadrado empotrar",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjLyaQFTo5lMAZkzyuR0pBX5wrTuHMXl14DA&usqp=CAU"
    }
]

const products = [
    {
        id: "001",
        name: "cuadrado embutir 6w",
        slug: "cuadrado-embutir"
    },
    {
        id: "002",
        name: "cuadrado embutir 12w",
        slug: "cuadrado-embutir"
    },
    {
        id: "003",
        name: "cuadrado embutir 18w",
        slug: "cuadrado-embutir"
    },
    {
        id: "004",
        name: "cuadrado embutir 24w",
        slug: "cuadrado-embutir"
    },
    {
        id: "005",
        name: "cuadrado aplicar 6w",
        slug: "cuadrado-aplicar"
    },
    {
        id: "006",
        name: "cuadrado aplicar 12w",
        slug: "cuadrado-aplicar"
    },
    {
        id: "007",
        name: "cuadrado aplicar 18w",
        slug: "cuadrado-aplicar"
    },
    {
        id: "008",
        name: "cuadrado aplicar 24w",
        slug: "cuadrado-aplicar"
    },
    {
        id: "009",
        name: "circular aplicar 6w",
        slug: "circular-aplicar"
    },
    {
        id: "010",
        name: "circular aplicar 12w",
        slug: "circular-aplicar"
    },
    {
        id: "011",
        name: "circular aplicar 18w",
        slug: "circular-aplicar"
    },
    {
        id: "012",
        name: "circular aplicar 24w",
        slug: "circular-aplicar"
    },
    {
        id: "013",
        name: "circular embutir 6w",
        slug: "circular-embutir"
    },
    {
        id: "014",
        name: "circular embutir 12w",
        slug: "circular-embutir"
    },
    {
        id: "015",
        name: "circular embutir 18w",
        slug: "circular-embutir"
    },
    {
        id: "016",
        name: "circular embutir 24w",
        slug: "circular-embutir"
    },
    
]

export const getCategories = () => {
    return new Promise ((resolve, reject) =>{
        setTimeout(()=>{
            resolve(categories)
        },500)
    })
}

export const getProductsByCategory = () =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log(products)
        })
    })
}