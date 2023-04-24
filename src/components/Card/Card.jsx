import { Link } from "react-router-dom"

const Card = ({categories, categoriaId}) => {
    return(
        <>
        {
            categories.map(cat => {
                return(
                    <div key={cat.id} style={{border:"1px solid #c3c3c3", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                        <img src={cat.img} alt={cat.name} style={{width: "200px"}}/>
                        <p className="font-bold">{cat.name}</p>
                        {categoriaId ? <Link className="bg-lime-500 px-5 py-2 mb-1 rounded" to={`/articulo/${cat.id}`}>ver detalle</Link> : <Link className="bg-cyan-900 px-5 py-2 mb-1 text-cyan-50 rounded" to={`/categoria/${cat.slug}`}>ver categorias</Link>}
                    </div>
                )
            })
        }
        </>
    )
}
export default Card