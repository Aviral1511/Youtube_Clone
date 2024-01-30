import axios from "axios";
const baseurl = 'https://youtube-v31.p.rapidapi.com/search'
const options = {
  method: 'GET',
  url: '',
  params: {},
  headers: {
    'X-RapidAPI-Key': 'd7c294ee78mshb42583586150bc8p1aed99jsn150fae7c7172',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export async function fetchData(params){
    try {
        options.url = baseurl;
        options.params = params;
        const response = await axios.request(options);
        return response.data
    } catch (error) {
        console.error(error);
        
    }
}

const options2 = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com/channels',
  params: {},
  headers: {
    'X-RapidAPI-Key': 'd7c294ee78mshb42583586150bc8p1aed99jsn150fae7c7172',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};
export async function fetchChannelDetail(params){
  try {
      options2.params = params;
      const response = await axios.request(options2);
      return response.data
  } catch (error) {
      console.error(error);
      
  }
}

const options3 = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com/search',
  params: { },
  headers: {
    'X-RapidAPI-Key': 'd7c294ee78mshb42583586150bc8p1aed99jsn150fae7c7172',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};
export async function fetchChannelVideo(params){
  try {
      options3.params = params;
      const response = await axios.request(options3);
      return response.data
  } catch (error) {
      console.error(error);
      
  }
}

const options4 = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com/videos',
  params: { },
  headers: {
    'X-RapidAPI-Key': 'd7c294ee78mshb42583586150bc8p1aed99jsn150fae7c7172',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};
export async function fetchVideo(params){
  try {
      options4.params = params;
      const response = await axios.request(options4);
      return response.data
  } catch (error) {
      console.error(error);
      
  }
}

const options5 = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com/search',
  params: { },
  headers: {
    'X-RapidAPI-Key': 'd7c294ee78mshb42583586150bc8p1aed99jsn150fae7c7172',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export async function relatedVideo(params){
  try {
      options5.params = params;
      const response = await axios.request(options5);
      return response.data
  } catch (error) {
      console.error(error);
      
  }
}


//export {fetchData, fetchChannelDetail};

