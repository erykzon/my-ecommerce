const Item = (props) => {
    return (
        <div className="card rounded-md shadow-md">
          <div className="card__top">
            <img src={props.img} alt="stuff" />
          </div>
          <div className="card__content">
            <span className="category">{props.categoria}</span>
            <span className="size">{props.talla}</span>
            <span className="color">{props.color}</span>
            <span className="price">{props.precio}</span>


          </div>
        </div>
    )
}

export default Item