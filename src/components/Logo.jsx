// import { Padding } from '@mui/icons-material';
import image from '../static/purple.png'
import '../style/board.css'
import Button from '@mui/material/Button';
import { Link } from "wouter";

const Logo = () => {
    
    const Stylesh1 = {
        fontSize: '3.5rem',
        color: '#CF9FFF',
        textAlign: 'left',
        // fontFamily: 'Lilita One, cursive',
        fontFamily: 'Inter, sans-serif',
        textShadow: '4px 4px 6px #755991',

        

    }
    const Stylesh2 = {
        fontSize: '2rem',
        color: '#eeeeee',
        textAlign: 'left',
        margin: '-40px 10px 14vh 10px',
        textShadow: '2px 2px 3px #755991',
        marginBottom: '70px'
        
    }
    const styles3 = {
        backgroundColor: '#CF9FFF',
        color: 'black',
        fontWeight: '550',
        borderRadius: '15px',
        width: '120px',
        height: '42px'

    }
    const styles4 = {
        color: '#ffffff',
        fontWeight: '550',
        borderRadius: '15px',
        border: ' solid 1px #CF9FFF',
        width: '120px',
        height: '42px',
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
            alignItems: 'center',
            marginTop: '3.5vh',
            gap: '10vw',
            // flexWrap: 'wrap-reverse'

        }}><div>
        <h1 style={Stylesh1}>ChessRocket</h1>
            <h3 style={Stylesh2} className='h3-font'>Everything you need about chess...</h3>
            <div style={{
                display: 'flex',
                justifyContent: 'left',
                gap: '2vw',
            }}>
                <Link href='/Login' style={{textDecoration: 'none', color: '#181818'}}><Button variant="contained" style={styles3}>Sing up!</Button></Link>
                <Link href='/Courses' style={{textDecoration: 'none', color: '#181818'}}><Button variant="outlined" style={styles4}>Courses</Button></Link>
            </div>
            </div>
            <img src={image} alt="" id="imageId"style={{
                // width: '30%',
                height: '100%',
                minWidth: '10%',
            }} />
        </section>
        </div>
    )
}

export default Logo