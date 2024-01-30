import {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Stack, Typography, Box } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import {Video} from './index';
import { fetchVideo, relatedVideo } from '../utils/rapid';


const VideoDetail = () => {

  let {id} = useParams();
  const [videoDetail, setVideoDetail] = useState({});
  const [videos, setVideos] = useState({})

  useEffect(() => {
    const params = {
        part: 'contentDetails,snippet,statistics',
        id: id
    };
    fetchVideo(params).then((data) => setVideoDetail(data?.items[0]));

    const params2 = {
      relatedToVideoId: id,
      part: 'snippet',
      type: 'video',
      maxResults: '24'
    };
    relatedVideo(params2).then((data) => setVideos(data.items));

  },[id]);

  if(!videoDetail?.snippet) return 'Loading...';

  const {snippet, statistics} = videoDetail;
  const {title, channelId, channelTitle} = snippet;
  const {viewCount, likeCount} = statistics;


  return (
    <Box minHeight={"95vh"}>
      <Stack direction={{xs : "column", md: "row"}}>
        <Box flex={1}>
          <Box sx={{width : "100%", position:"sticky", top:"86px"}}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls/>
            <Typography color={"#fff"} variant='h5' fontWeight={"bold"} p={2}>
              {title}
            </Typography>
            <Stack direction={"row"} justifyContent={"space-between"} px={2} py={1} sx={{color : "#fff"}}>
                <Link to={`/channel/${channelId}`}>
                  <Typography variant={{sm:"subtitle1", md:"h6"}} color={"#fff"}>
                    {channelTitle}
                    <CheckCircle sx={{color :"gray", fontSize:"12px", ml:"5px"}}/>
                  </Typography>
                </Link>
                <Stack direction={"row"} alignItems={"center"} gap={"20px"}>
                  <Typography variant='body1' sx={{opacity: 0.7}}>
                    {parseInt(viewCount).toLocaleString()} views
                  </Typography>
                  <Typography variant='body1' sx={{opacity: 0.7}}>
                    {parseInt(likeCount).toLocaleString()} likes
                  </Typography>
                </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{xs:5, md:1}} justifyContent={"center"} alignItems={"center"}>
            <Video videos={videos} direction={"column"}/>
        </Box>
      </Stack>


    </Box>
  )
}

export default VideoDetail