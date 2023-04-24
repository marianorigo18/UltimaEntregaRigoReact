const Grilla = ({children}) => {
  return (
    <div style={{maxWidth: "1500px", margin: "auto"}}>
        <div className="grid gap-4 grid-cols-4 grid-rows-3">{children}</div>
    </div>
  )
}

export default Grilla