import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Cartesian3, Color, PinBuilder, Viewer } from 'cesium';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Photo } from './photo';

@Injectable({
  providedIn: 'root'
})
export class CesiumService {

  private viewer: Viewer;

  constructor(private firestore: AngularFirestore) { }

  addPhotos() {
    const pinBuilder = new PinBuilder();

    this.getPhotos().subscribe(photos => {
      photos.forEach(photo => {
        const entity = {
          position: Cartesian3.fromDegrees(photo.lng, photo.lat),
          billboard: {
            image: pinBuilder.fromColor(Color.fromCssColorString('#de6b45'), 48).toDataURL()
          },
          description: `<img width="100%" style="margin:auto; display: block;" src="${photo.url}" />`
        };
        this.viewer.entities.add(entity);
      });
    });
  }

  register(viewer: Viewer) {
    this.viewer = viewer;
  }

  private getPhotos(): Observable<Photo[]> {
    return this.firestore.collection<Photo>('photos').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        return a.payload.doc.data() as Photo;
      }))
    );
  }
}
