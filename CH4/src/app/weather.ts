export interface Weather {
  weather: {
    main: string;
    icon: string;
  };
  main: {
    temp: number;
    pressure: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  sys: {
    country: string
  };
  name: string;
}
