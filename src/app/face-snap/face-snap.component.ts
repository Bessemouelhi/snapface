import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaceSnap } from '../models/face-snap.model';
import {FaceSnapsService} from "../services/face-snaps.service";

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})

export class FaceSnapComponent implements OnInit {

  @Input() faceSnap!: FaceSnap;

  constructor(private faceSnapService: FaceSnapsService) {
  }

  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  liked!: boolean;
  btnText!: string;

  //Méthode appelée au moment de l'instanciation du composant.
  ngOnInit(): void {
    this.liked = false;
    this.btnText = 'Snap!';
  }

  onAddSnap() {
    if (this.liked) {
      this.faceSnapService.snapById(this.faceSnap.id, 'unsnap');
      this.btnText = 'Snap!';
    } else {
      this.faceSnapService.snapById(this.faceSnap.id, 'snap');
      this.btnText = 'Snapped!';
    }
    this.liked = !this.liked;
  }

}
