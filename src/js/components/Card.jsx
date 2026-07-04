export const Card = ({image, title, description}) => {
    return (
        <div className="col-md-3 mt-4">
        <div className="card h-100">
            <img src={image} className="card-img-top" alt={title} />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{title}</h5>
                <p className="card-text flex-grow-1">{description}</p>
                <a href="#" className="btn btn-primary w-100">Ver Viñeta</a>
            </div>
        </div>
        </div>
    )

}