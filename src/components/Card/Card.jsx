import { Link } from "react-router-dom"

const Card = ({categories, categoriaId}) => {
    return(
        <>
        {
            categories.map(cat => {
                return(
                    <div key={cat.id} style={{border:"1px solid #c3c3c3", display: "inline-flex", flexWrap: "wrap"}}>
                        <img src={cat.img} alt={cat.name} style={{width: "200px"}}/>
                        <p>{cat.name}</p>
                        {categoriaId ? <Link to={`/articulo/${cat.id}`}>ver detalle</Link> : <Link to={`/categoria/${cat.slug}`}>ver categorias</Link>}
                    </div>
                )
            })
        }
        </>
    )
}
export default Card