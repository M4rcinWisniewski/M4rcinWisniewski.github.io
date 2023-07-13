// import Main from './components/main';
import ResponsiveAppBar from './components/NavBard'
import ActionAreaCard from './components/main'
import data from './data/data'
import Stack from '@mui/material/Stack';
import Logo from './components/Logo';
// import { shadows } from '@mui/system';
function App() {
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
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Logo />
      <div style={style}>
        <h2 style={{color: '#eeeeee', opacity: '100%'}}>
          Most popular courses
        </h2>
        <Stack direction="row"  FlexWrap="wrap"  sx={{

  }} >
          
            {cards}
        </Stack>
      </div>
      
    </div>
  );
}

export default App;
