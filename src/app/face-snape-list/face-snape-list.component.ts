import { Component, OnInit } from '@angular/core';
import { Facesnape } from '../models/face-snape.models';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snape-list',
  templateUrl: './face-snape-list.component.html',
  styleUrls: ['./face-snape-list.component.css']
})
export class FaceSnapeListComponent implements OnInit {
  mySnapes!:Facesnape[];

  constructor(private facesnapservice:FaceSnapsService ) { }

  ngOnInit(): void {
   this.mySnapes= this.facesnapservice.getAllFaceSnaps();
  }


}
