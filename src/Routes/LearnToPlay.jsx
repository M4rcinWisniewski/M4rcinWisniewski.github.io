import ResponsiveAppBar from "../components/NavBard"
import piece from '../data/dataPieces'
import CardPieces from "../components/CardPieces"
import '../style/board.css'

const cards = piece.map(item =>{
    return(
        <CardPieces 
            key={item.id}
            name={item.name}
            img={item.img}
            />
    )
})
const Learn = () => {

    return (
        <>
            <ResponsiveAppBar/>
            <h1 className="h1Learn"style={{color: '#eeefff', margin: '15vh', textAlign: 'center', textShadow: '4px 4px 6px #755991',}}>Learn how to move pieces</h1>
            <section style={{
                display: 'flex', 
                width: '100vw', 
                height: '50vh', 
                justifyContent: 'center', 
                // flexWrap: 'wrap',
                alignContent: 'center'
                }}>
                    
                    {cards}
                </section>
        </>
    )
}


export default Learn 