declare module '@apiverve/weatherseasons' {
  export interface weatherseasonsOptions {
    api_key: string;
    secure?: boolean;
  }

  /**
   * Describes fields the current plan does not unlock. Locked fields arrive as null
   * in `data`; `locked_fields` names them, using dot paths for nested fields.
   * Absent when the plan unlocks everything.
   */
  export interface PremiumInfo {
    message: string;
    upgrade_url: string;
    locked_fields: string[];
  }

  export interface weatherseasonsResponse {
    status: string;
    error: string | null;
    data: WeatherSeasonsData;
    code?: number;
    premium?: PremiumInfo;
  }


  interface WeatherSeasonsData {
      year:             number | null;
      timezone:         null | string;
      marchEquinox:     Date | null;
      juneSolstice:     Date | null;
      septemberEquinox: Date | null;
      decemberSolstice: Date | null;
  }

  export default class weatherseasonsWrapper {
    constructor(options: weatherseasonsOptions);

    execute(callback: (error: any, data: weatherseasonsResponse | null) => void): Promise<weatherseasonsResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: weatherseasonsResponse | null) => void): Promise<weatherseasonsResponse>;
    execute(query?: Record<string, any>): Promise<weatherseasonsResponse>;
  }
}
