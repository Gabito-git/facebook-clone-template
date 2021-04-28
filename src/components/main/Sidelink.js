
const Sidelink = ({ imageRoute, text }) => {
    return (
        <div className="sidelink">
            <div className="sidelink__img-container">
                <img src={ imageRoute } alt="link"/>
            </div>
            <p>{ text }</p>
        </div>
    )
}

export default Sidelink
