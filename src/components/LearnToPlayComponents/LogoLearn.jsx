// import { Chess } from 'chess.js'
import { Chessboard } from 'react-chessboard'
const intro = () => {



    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row-reverse',
            justifyContent: 'center',
            width: '100vw',
            marginTop: '10vh',
            height: '90vh',
            gap: '15vw',
           

        }}>
            <h1 style={{
                fontSize: '4rem',
                width: '30vw',
                color: '#CF9FFF',
                fontFamily: 'Inter, sans-serif',
                textShadow: '4px 4px 6px #755991',
                alignSelf: 'flex-start',
                marginTop: '12vh'
                
                // marginTop: 
            }}>Learn basic rules of chess!</h1>
            <div style={{
                width: '30vw',
                alignSelf: 'center',
                height: 'auto'
               
            }}>
                <Chessboard id="BasicBoard"/>
            </div>
        </div>
    )
}

export default intro