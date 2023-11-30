import {Injectable} from "@angular/core";
import {FaceSnap} from "../models/face-snap.model";

@Injectable({
  providedIn: "root"
})
export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: 'Archibald Kebab',
      description: 'Mon meilleur ami depuis tout petit !',
      imageUrl: 'https://images.unsplash.com/photo-1700359387203-d24d08d07b04?q=40&w=1080&auto=format&fit=crop',
      createdDate: new Date(),
      snaps: 60,
      location: 'Paris'
    },
    {
      id: 2,
      title: 'Three Rock Mountain',
      description: 'Un endroit magnifique pour les randonnées.',
      imageUrl: 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=40&w=1080&auto=format&fit=crop',
      createdDate: new Date(),
      snaps: 170,
      location: 'Nice'
    },
    {
      id: 3,
      title: 'Un bon repas',
      description: 'Mmmh que c\'est bon !',
      imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=40&w=1080&auto=format&fit=crop',
      createdDate: new Date(),
      snaps: 255
    }
  ];

  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }

  getFaceSnapById(id: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(
      faceSnap => faceSnap.id === id);

    if (!faceSnap) {
      throw new Error('FaceSnap not found!');
    } else {
      return faceSnap;
    }
  }

  snapById(faceSnapId: number, snapType: string): void {
    const myfaceSnap = this.getFaceSnapById(faceSnapId);
    snapType === 'snap' ? myfaceSnap.snaps++ : myfaceSnap.snaps--;
  }

  unsnapById(id: number): void {
    const  faceSnap = this.faceSnaps.find(
      faceSnap => faceSnap.id === id);

    if (faceSnap) {
      faceSnap.snaps--;
    } else {
      throw new Error('FaceSnap not found');
    }
  }
}
