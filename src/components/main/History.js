
const History = ({ imageBig, imageSmall, text }) => {
    return (
        <div className="history">
            <img src={ imageBig } alt="history"/>
            <p className="history__text">{ text }</p>
            <div className="history__img-small">
                <img src={ imageSmall } alt="history-small"/>
            </div>
        </div>
    )
}

export default History
