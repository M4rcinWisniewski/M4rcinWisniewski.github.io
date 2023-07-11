// import Main from './components/main';
import ResponsiveAppBar from './components/NavBard'
import ActionAreaCard from './components/main'
import data from './data/data'
import Stack from '@mui/material/Stack';
import Logo from './components/Logo';
function App() {
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
      <div className='cards'><Stack direction="row"  FlexWrap="wrap" >{cards}</Stack></div>
      
    </div>
  );
}

export default App;
