import Box from '@mui/material/Box';

const CardPieces = props => {
    return(
        <Box
        sx={{
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            flexDirection: 'column', 
            padding: '3.5vw',
            margin: '3vw',
            marginTop: '2vh',
            color: '#fffeee', 
            width: '10vw',
            height: '15vh',
            borderRadius: '15px',
            // border: 'solid 1px #eeefff',
            transition: '.5s',
            cursor: 'pointer',
            
            '&:hover': {
                width: '11.5vw',
                height: '16.5vh',
                filter: 'drop-shadow(0px 0px 30px #CF9FFF)',
                textShadow: '0px 3px 6px #755991',
              }
        }}
        >
            <img src={props.img} alt="" />
            <h1>{props.name}</h1>
        </Box>
    )
}

export default CardPieces