import {useState, useEffect} from 'react';
import {Stack, Typography, Box} from '@mui/material';
import {SideBar, Video} from './index';
import {fetchData}  from '../utils/rapid';

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]); 

  useEffect(() => {
    const params =  {
      q: `${selectedCategory}`,
      part: 'snippet,id',
      maxResults: '50',
    }
    fetchData(params).then((data) => setVideos(data.items));
  },[selectedCategory]);

  return (
    <Stack sx={{flexDirection : {sm: "column", md: "row"}}}>
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight : '1px solid #3d3d3d', px : {sx: "0", md:"2"}}}>
          <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
          <Typography className='copyright' variant='body2' sx={{mt : 1.5, color:"#fff"}}>
          </Typography>
      </Box>
      <Box p={2} sx={{overflowY : 'auto', height:'90vh', flex:2}}>
        <Typography variant='h4' fontWeight={"bold"} mb={2} sx={{color : 'white'}}>
          {selectedCategory} <span style={{color : '#f31503'}}>videos</span>
        </Typography>
        <Video videos={videos} />
      </Box>
    </Stack>
  )
}

export default Feed