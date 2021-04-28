import History from "./History"

const Histories = () => {
    return (
        <div className="histories">
            <History 
                imageBig="./assets/big1.jpg"
                imageSmall="./assets/small1.jpg"
                text="Diana Patricia"
            />

            <History
                imageBig="./assets/big2.jpg"
                imageSmall="./assets/small2.jpg"
                text="Rafael Diaz"
             />

            <History 
                imageBig="./assets/big3.jpg"
                imageSmall="./assets/small3.jpg"
                text="Julio Sanchez"
            />

            <History 
                imageBig="./assets/big4.jpg"
                imageSmall="./assets/small4.jpg"
                text="Carito Buitrago"
            />

            <History 
                imageBig="./assets/big5.jpg"
                imageSmall="./assets/small4.jpg"
                text="Andrea Suarez"
            />

            
        </div>
    )
}

export default Histories
