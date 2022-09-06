import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { Facesnape } from '../models/face-snape.models';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snape',
  templateUrl: './face-snape.component.html',
  styleUrls: ['./face-snape.component.css']
})
export class FaceSnapeComponent implements OnInit {
 @Input() facesnape !:Facesnape;

 constructor(private facesnapeservice:FaceSnapsService,private route:Router){}

 /* title!:string;
  urlImage!:string
  description!:string;
  createdDate!:Date;
  nbrJaime!:number
  snapped:boolean = false
  btnComportement!:string*/
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
onViewFaceSnap():void{
 this.route.navigateByUrl(`facesnaps/${this.facesnape.id}`)
}

  ngOnInit(): void {
    /*this.title="Pc Hp i5 ElitBook"
    this.urlImage="https://loozap.com/storage/files/dz/dzal_22-04-2021_23-04-2021/loozap_algerie_26141741_Photo1.jpg"
    this.description="Ordinateur que je veux avoir"
    this.createdDate= new Date()
    this.nbrJaime =6
    this.btnComportement="oh snape!"*/

  }

}
