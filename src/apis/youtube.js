import axios from 'axios';
import {YOUTUBE_API_KEY} from './key';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5, 
        type: 'video',
        key: YOUTUBE_API_KEY
    }
});
