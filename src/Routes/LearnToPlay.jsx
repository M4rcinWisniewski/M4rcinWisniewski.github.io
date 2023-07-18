import ResponsiveAppBar from "../components/NavBard"
import piece from '../data/dataPieces'
import CardPieces from "../components/LearnToPlayComponents/CardPieces"
import '../style/style.css'
import LogoLearn from '../components/LearnToPlayComponents/LogoLearn'

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
        <div>
            <ResponsiveAppBar/>
            <LogoLearn  />
            <h1 className="h1Learn"style={{color: '#eeefff',
             margin: '15vh', 
             textAlign: 'center', 
             textShadow: '4px 4px 6px #755991', 
             marginBottom: '0'}}>
                Learn how to move pieces
                </h1>
            <section style={{
                display: 'flex', 
                width: '100vw', 
                height: '50vh', 
                justifyContent: 'center', 
                // flexWrap: 'wrap',
                alignContent: 'center',
                marginTop: '0',
                
                }}>
                    
                    {cards}
                </section>
        </div>
    )
}


export default Learn 