import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { demoChannelTitle, demoChannelUrl, demoThumbnailUrl, demoVideoTitle, demoVideoUrl } from "../utils/constants";

const VideoCard = ({video}) => {
    const videoID = video.id.videoId;
    const snippet = video.snippet;
    return (
        <Card sx={{ width: { xs: '100%', sm: '358px', md: "320px", }, boxShadow:"none", borderRadius :0}}>  
            <Link to={videoID ? `/video/${videoID}` : demoVideoUrl}>
                <CardMedia image={snippet?.thumbnails?.high?.url} alt={snippet?.title}
                  sx={{ width: { xs: '100%', sm: '358px'}, height: 180 }} />
            </Link>
            <CardContent sx={{backgroundColor : "#1e1e1e", height : '106px'}}>
                <Link to={videoID ? `/video/${videoID}` : demoVideoUrl}>
                    <Typography variant="subtitle1" fontWeight={"bold"} color={'#FFF'}>
                        {snippet?.title.slice(0,70) || demoVideoTitle.slice(0,60)}
                    </Typography>
                </Link>
                <Link to={snippet?.channelId ? `/video/${snippet?.channelId}` : demoChannelUrl}>
                    <Typography variant="subtitle2" fontWeight={"bold"} color={'gray'}>
                        {snippet?.channelTitle || demoChannelTitle}
                        <CheckCircle sx={{fontSize : 12, color : "gray", ml : "5px"}}/>
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    )
}

export default VideoCard