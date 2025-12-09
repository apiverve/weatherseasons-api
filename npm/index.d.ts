declare module '@apiverve/weatherseasons' {
  export interface weatherseasonsOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface weatherseasonsResponse {
    status: string;
    error: string | null;
    data: WeatherSeasonsData;
    code?: number;
  }


  interface WeatherSeasonsData {
      year:             number;
      timezone:         string;
      marchEquinox:     Date;
      juneSolstice:     Date;
      septemberEquinox: Date;
      decemberSolstice: Date;
  }

  export default class weatherseasonsWrapper {
    constructor(options: weatherseasonsOptions);

    execute(callback: (error: any, data: weatherseasonsResponse | null) => void): Promise<weatherseasonsResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: weatherseasonsResponse | null) => void): Promise<weatherseasonsResponse>;
    execute(query?: Record<string, any>): Promise<weatherseasonsResponse>;
  }
}
