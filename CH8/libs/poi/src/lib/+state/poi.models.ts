/**
 * Interface for the 'Poi' data
 */
export interface PoiEntity {
  id: string | number; // Primary ID
  lat: number;
  lng: number;
  title: string;
  description: string;
}
