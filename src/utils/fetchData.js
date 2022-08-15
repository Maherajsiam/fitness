export const exerciseOptions = {
    method: 'GET',
    headers:{
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        'X-RapidAPI-Key': 'a1d749697fmshb37760b8a97cc2bp11f9edjsn9d19421b9c22'
    }
};
export const youtubeOptions = {
    method: 'GET',
    headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': 'a1d749697fmshb37760b8a97cc2bp11f9edjsn9d19421b9c22'
    }
  };

export const fetchData = async (url, options)=> {
    const response = await fetch (url, options);
    const data = await response.json();
    
    return data;
}