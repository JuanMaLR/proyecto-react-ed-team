const CriptoGrid = ({id, name, symbol, maxSupply, supply, priceUsd}) => {
    return (
        <div className="col-12 col-md-6 col-lg-4 col-xxl-3 mb-3">
            <div className="card">
                <div className="card-body">
                <h5 className="card-title flex-title"><div>{name}</div><div className="price">${parseFloat(priceUsd).toFixed(2)}USD</div></h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">{symbol}</h6>
                { isNaN(parseFloat(maxSupply)) ? <p className="card-text">Currently {parseFloat(supply).toFixed(2)} {id} in circulation</p> : <p className="card-text">{parseFloat(maxSupply).toFixed(2) - parseFloat(supply).toFixed(2)} {id} still available!</p> }
                </div>
            </div>
        </div>
    )
}

export default CriptoGrid