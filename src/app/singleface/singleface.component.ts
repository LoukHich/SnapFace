import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Facesnape } from '../models/face-snape.models';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-singleface',
  templateUrl: './singleface.component.html',
  styleUrls: ['./singleface.component.css']
})


export class SinglefaceComponent implements OnInit {
  facesnape!:Facesnape
  constructor(private facesnapeservice:FaceSnapsService,private route:ActivatedRoute ) { }

  ngOnInit(): void {
    //const snapid =
    this.facesnape = this.facesnapeservice.getFaceSnapById(+this.route.snapshot.params['id'])
  }
  oneAddSnape(){
    if(this.facesnape.btnComportement==="oh snape!"/*this.snapped==false*/){
      this.facesnape.btnComportement="unsnape"
      this.facesnapeservice.snapFaceSnapById(this.facesnape.id,"snap")
    }else{
      //this.facesnape.snapped=false;
      this.facesnape.btnComportement="oh snape!"
      this.facesnapeservice.snapFaceSnapById(this.facesnape.id,"unsnap")
      //this.facesnape.nbrJaime--
    }
    //this.nbrJaime++;
  }
}
