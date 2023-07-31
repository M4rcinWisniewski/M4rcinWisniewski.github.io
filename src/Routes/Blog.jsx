import { Box } from '@mui/material';
import BlogCard from '../components/Blog/BlogCard';
import ResponsiveAppBar from '../components/NavBard'
export default function Blog() {
  return (
    <>
        <ResponsiveAppBar />
        <Box sx={{display: 'flex', justifyContent: 'center', margin: '2vh 2vw 0 2vw'}}>
            <BlogCard />
        </Box>
    </>
  );
}