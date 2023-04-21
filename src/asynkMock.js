// import { collection, getDocs, getFirestore } from "firebase/firestore"
const categories = [
    {
        id: "1", 
        name: "cuadrado embutir",
        img: "data:image/png;base64,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",
        slug: "cuadrado-embutir",
    },
    {
        id: "2",
        name: "circular embutir",
        img: "https://http2.mlstatic.com/D_NQ_NP_715381-MLA44192158708_112020-W.jpg",
        slug: "circular-embutir",
    },
    {
        id: "3",
        name: "circular aplicar",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjLyaQFTo5lMAZkzyuR0pBX5wrTuHMXl14DA&usqp=CAU",
        slug: "circular-aplicar",
    },
    {
        id: "4",
        name: "cuadrado aplicar",
        img: "https://http2.mlstatic.com/D_NQ_NP_713373-MLA49076916173_022022-O.webp",
        slug: "cuadrado-aplicar",
    }
]

const products = [
    {
        id: "Q9A0FfakKZIbyr7eYzsN",
        stock: "10",
        name: "cuadrado embutir 6w",
        category: "cuadrado-embutir",
        img: "data:image/png;base64,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"
    },
    {
        id: "sXVwjNE5lbj5fRXezznE",
        stock: "10",
        name: "cuadrado embutir 12w",
        category: "cuadrado-embutir",
        img: "data:image/png;base64,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"
    },
    {
        id: "m6WPXcTR0ibLIqrmMbpf",
        stock: "10",
        name: "cuadrado embutir 18w",
        category: "cuadrado-embutir",
                img: "data:image/png;base64,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"
    },
    {
        id: "d0snpTqbpTXV7tSN8lg5",
        stock: "10",
        name: "cuadrado embutir 24w",
        category: "cuadrado-embutir",
        img: "data:image/png;base64,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"
    },
    {
        id: "iOXNoplsAUKenjLuqKav",
        stock: "10",
        name: "cuadrado aplicar 6w",
        category: "cuadrado-aplicar",
        img: "https://http2.mlstatic.com/D_NQ_NP_713373-MLA49076916173_022022-O.webp"
    },
    {
        id: "yRgsIArjWkNMJjPiRPbj",
        stock: "10",
        name: "cuadrado aplicar 12w",
        category: "cuadrado-aplicar",
        img: "https://http2.mlstatic.com/D_NQ_NP_713373-MLA49076916173_022022-O.webp"
    },
    {
        id: "3B9233D5S1GQiHIO6bhV",
        stock: "10",
        name: "cuadrado aplicar 18w",
        category: "cuadrado-aplicar",
        img: "https://http2.mlstatic.com/D_NQ_NP_713373-MLA49076916173_022022-O.webp"
    },
    {
        id: "kLvNZMB1eudNz6262Vzl",
        stock: "10",
        name: "cuadrado aplicar 24w",
        category: "cuadrado-aplicar",
        img: "https://http2.mlstatic.com/D_NQ_NP_713373-MLA49076916173_022022-O.webp"
    },
    {
        id: "y9uGm2zx2jucm8VxpRPC",
        stock: "10",
        name: "circular aplicar 6w",
        category: "circular-aplicar",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjLyaQFTo5lMAZkzyuR0pBX5wrTuHMXl14DA&usqp=CAU"
    },
    {
        id: "bdxdMi94eghdOrRlzeMY",
        stock: "10",
        name: "circular aplicar 12w",
        category: "circular-aplicar",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjLyaQFTo5lMAZkzyuR0pBX5wrTuHMXl14DA&usqp=CAU"
    },
    {
        id: "RyYMV7L9PONYGHB2HhGZ",
        stock: "10",
        name: "circular aplicar 18w",
        category: "circular-aplicar",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjLyaQFTo5lMAZkzyuR0pBX5wrTuHMXl14DA&usqp=CAU"
    },
    {
        id: "nSxflDlQdVmpezvXHMPk",
        stock: "10",
        name: "circular aplicar 24w",
        category: "circular-aplicar",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjLyaQFTo5lMAZkzyuR0pBX5wrTuHMXl14DA&usqp=CAU"
    },
    {
        id: "XKKlLjWr7e9BiSNhkber",
        stock: "10",
        name: "circular embutir 6w",
        category: "circular-embutir",
        img: "https://http2.mlstatic.com/D_NQ_NP_715381-MLA44192158708_112020-W.jpg"
    },
    {
        id: "6yVr0xz1kQazSvei2WrB",
        stock: "10",
        name: "circular embutir 12w",
        category: "circular-embutir",
        img: "https://http2.mlstatic.com/D_NQ_NP_715381-MLA44192158708_112020-W.jpg"
    },
    {
        id: "GcycJAN1s9Pg0ZMnjLlJ",
        stock: "10",
        name: "circular embutir 18w",
        category: "circular-embutir",
        img: "https://http2.mlstatic.com/D_NQ_NP_715381-MLA44192158708_112020-W.jpg"
    },
    {
        id: "VrXM0XY9vyt1rvCojzbP",
        stock: "10",
        name: "circular embutir 24w",
        category: "circular-embutir",
        img: "https://http2.mlstatic.com/D_NQ_NP_715381-MLA44192158708_112020-W.jpg"
    },
    
]

export const getCategories = () => {
    return new Promise ((resolve, reject) =>{
        setTimeout(()=>{
            resolve(categories)
        },500)
    })
}

export const getProductsByCategory = (categoriaId) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(products.filter(prod => prod.category === categoriaId))
        },500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            resolve(products.find(prod => prod.id === productId))
        },500)
    })
}

// export const getCategories2 = (categyId) => {
//     return new Promise((resolve, reject)=>{
//         const db = getFirestore()
//         const itemsCollection = collection(db, "categories");
//         getDocs(itemsCollection)
//         .then(products => {
//             if(products.size === 0){
//                 console.log("dont exist")
//             }
//         })
//     })
// }