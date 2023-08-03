import { Box } from '@mui/material';
import BlogCard from '../components/Blog/BlogCard';
import ResponsiveAppBar from '../components/NavBard'
import {data} from '../data/blogdata';
export default function Blog() {
  const cards = data.map(item =>{
    return (
      <BlogCard 
        key={item.id}
        name={item.name}
        image={item.img}
        description={item.description}
        like={item.like}

      />
    )
  })
  return (
    <>
        <ResponsiveAppBar />
        <Box sx={{display: 'flex', justifyContent: 'center', margin: '2vh 2vw 0 2vw'}}>
            {cards}
        </Box>
    </>
  );
}