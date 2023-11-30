import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapComponent } from '../face-snap/face-snap.component';
import {FaceSnapsService} from "../services/face-snaps.service";

@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [CommonModule, FaceSnapComponent],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent {

  mySnaps!: FaceSnap[];

  constructor(private faceSnapsService: FaceSnapsService){}

  ngOnInit(): void {
    this.mySnaps = this.faceSnapsService.getAllFaceSnaps();
  }

}
