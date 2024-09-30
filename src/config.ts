const config = {
    apiUrl: import.meta.env.MODE === 'production' 
             ? import.meta.env.VITE_API_PRODUCTION_URL 
             : import.meta.env.VITE_API_URL,

    apiDniBase: import.meta.env.VITE_API_DNI_BASE,
    apiToken: import.meta.env.VITE_API_TOKEN,
    apiDownloader: import.meta.env.VITE_API_DOWNLOADER,
  };
  
  export default config;
  