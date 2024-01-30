import {useState, useEffect} from 'react';
import {Typography, Box} from '@mui/material';
import { Video} from './index';
import {fetchData}  from '../utils/rapid';
import { useParams } from 'react-router-dom';

const SearchFeed = () => {
  const [videos, setVideos] = useState([]); 
  const {searchTerm} = useParams();

  useEffect(() => {
    const params =  {
      q: `${searchTerm}`,
      part: 'snippet,id',
      maxResults: '50',
    }
    fetchData(params).then((data) => setVideos(data.items));
  },[searchTerm]);

  return (
    <Box p={2} sx={{overflowY : 'auto', height:'90vh', flex:2}}>
        <Typography variant='h4' fontWeight={"bold"} mb={2} sx={{color : 'white'}}>
          Search Results for :  <span style={{color : '#f31503'}} >{searchTerm}</span> videos
        </Typography>
        <Video videos={videos} />
    </Box>
  )
}

export default SearchFeed