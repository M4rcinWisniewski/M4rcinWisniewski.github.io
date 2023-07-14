import ResponsiveAppBar from '../components/NavBard'
import ActionAreaCard from '../components/main'
import data from '../data/data'
import Stack from '@mui/material/Stack';
import Logo from '../components/Logo';
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

// import { shadows } from '@mui/system';
function Home() {
  const style = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',

  }

  const cards = data.map(item =>{
    return (
      <ActionAreaCard 
        key={item.id}
        name={item.name}
        image={item.image}
        level={item.level}
        price={item.price}

      />
    )
  })
  const autoplayOptions = {
    delay: 5000,
    jump: false,
    align: 'center',
    
  }
  const [emblaRef] = useEmblaCarousel({loop: false},  [Autoplay(autoplayOptions)])

  return (
    <div className="App">
      <ResponsiveAppBar />
      <Logo />
      <div style={style}>
        <h2 style={{color: '#eeeeee', opacity: '100%', fontSize: '2rem', textShadow: '2px 2px 3px #755991', marginTop: '4vh'}}>
          Most popular courses
        </h2>
        <div ref={emblaRef} style={{overflow: 'hidden', display: 'flex', justifyContent: 'center',  }}>
          <Stack direction="row"  FlexWrap="wrap"  style={{ width: '60vw', margin: 0, display: 'flex', justifyContent: 'left',  flex: '0 0 50%'}} >
          
            {cards}
          </Stack>
          </div>
      </div>
      
    </div>
  );
}

export default Home