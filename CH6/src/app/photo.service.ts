import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Geolocation } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  async takePhoto() {
    await Camera.getPhoto({
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera,
      quality: 100
    });

    await this.getLocation();
  }

  async getLocation() {
    const location = await Geolocation.getCurrentPosition();
    return location.coords;
  }
}
