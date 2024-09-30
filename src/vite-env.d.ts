/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_URL: string;
    readonly VITE_API_PRODUCTION_URL: string;
    readonly VITE_API_DNI_BASE: string;
    readonly VITE_API_TOKEN: string;
    readonly VITE_API_DOWNLOADER: String;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  