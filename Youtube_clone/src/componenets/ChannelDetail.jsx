import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import {Video, ChannelCard} from './index';
import {fetchChannelDetail, fetchChannelVideo} from '../utils/rapid';


const ChannelDetail = () => {

  let {id} = useParams();

  const [channelDetail, setChannelDetail] = useState({});
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const params = {
      part: 'snippet,statistics',
      id: id,
    }
    fetchChannelDetail(params).then((data) => setChannelDetail(data?.items[0]));

    const params2 = {
      channelId: id,
      part: 'snippet,id',
      maxResults: '50',
      order: 'date',
    }
    fetchChannelVideo(params2).then((data) => setVideos(data?.items));

  },[id])
  

  return (
    <Box minHeight={'95vh'}>
      <Box>
        <div style={{background: 'linear-gradient(90deg, rgba(40,216,231,1) 5%, rgba(224,0,199,1) 49%, rgba(223,255,6,1) 99%)',
            zIndex:10, height:'300px'
      }}/>
        <ChannelCard channelDetail={channelDetail} marginTop = "-110px"/>
      </Box>
      <Box display={"flex"} p="2">
        <Box sx={{mr : {sm : "100px"}}}/>
        <Video videos={videos}/>
      </Box>
    </Box>
  )
}

export default ChannelDetail