import image from '../static/logo.png'
import '../style/board.css'

const Logo = () => {
    const Stylesh1 = {
        fontSize: '3.5rem',
        color: '#CF9FFF',
        textAlign: 'left',
        // fontFamily: 'Lilita One, cursive',
        fontFamily: 'Inter, sans-serif'

    }
    const Stylesh3 = {
        fontSize: '2rem',
        color: '#eeeeee',
        textAlign: 'left',
        margin: '-40px 10px 14vh 10px',
    }
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
        <section style={{
            width: '60vw',
            height: '40vh',
            display: 'flex',
            justifyContent: 'center',
            gap: '10vw',
            flexWrap: 'wrap-reverse'
        }}><div>
            <h1 style={Stylesh1}>CHESSHUB</h1>
            <h3 style={Stylesh3} className='h3-font'>Everything you need about chess</h3>
            </div>
            <img src={image} alt="" style={{
                // width: '30%',
                height: '100%',
                minWidth: '250px',
            }} />
        </section>
        </div>
    )
}

export default Logo