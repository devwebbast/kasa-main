function Cards ({cover, title}){
    return (
        <div className="cards">
            <img src={cover} alt="logement" />
            <div className="card-filter">
                <h4 className="card-title">{title}</h4>
            </div>
        </div>
    )
}

export default Cards