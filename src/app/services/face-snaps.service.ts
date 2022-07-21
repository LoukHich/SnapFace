import { Injectable } from '@angular/core';
import { Facesnape } from '../models/face-snape.models';


@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {

  faceSnaps: Facesnape[] =[{
      id:1,
      title:"hp elitbook ",
      urlImage:"https://pikwizard.com/photos/832c6a214586de8781a11ec936003908-s.jpg",
      description: "Hp Ordinateur Portable HP EliteBook 820- i5 - 6ème génération - remise à neuf",
      createdDate:new Date(),
      nbrJaime:6,
      btnComportement:"oh snape!",
      snapped:false

    },

  {
      id:2,
      title:"HP EliteBook ",
      description: "Hp Ordinateur Portable HP EliteBook 820- i5 - 6ème génération - remise à neuf",
      urlImage:"https://images.unsplash.com/photo-1617529497471-9218633199c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZ3JhbXxlbnwwfHwwfHw%3D&w=1000&q=80",
      createdDate:new Date(),
      nbrJaime:3,
      btnComportement:"oh snape!",
      snapped:false,
      location:"Nador"
    }]

  getAllFaceSnaps(): Facesnape[]  {
      return this.faceSnaps;
  }

  getFaceSnapById(faceSnapId: number): Facesnape {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!faceSnap) {
        throw new Error('FaceSnap not found!');
    } else {
        return faceSnap;
    }
  }
  snapFaceSnapById(faceSnapId: number,typSnape:"snap"|"unsnap"): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);


    if (typSnape=="snap") {
      faceSnap.snapped=true;
      faceSnap.nbrJaime++;
    } else {
      faceSnap.snapped=false;
      faceSnap.nbrJaime--;
    }




}
addFaceSnap(faceSnap:Facesnape):void{

  let asnap:Facesnape=faceSnap;
  faceSnap.nbrJaime=2
  faceSnap.createdDate= new Date(),
    faceSnap.id= this.faceSnaps[this.faceSnaps.length-1].id+1,
    faceSnap.btnComportement="oh snape!",
    faceSnap.snapped=false
    console.log(faceSnap)
   this.faceSnaps.push(faceSnap)
   console.log(this.faceSnaps)


   /*let asnape:Facesnape = {
    ...faceSnap,
    nbrJaime: 0,
    createdDate: new Date(),
    id: this.faceSnaps[this.faceSnaps.length-1].id+1,
    btnComportement:"oh snape!",
    snapped:false

  }*/
  /*console.log(asnape)
  this.faceSnaps.push(asnape)
  console.log(this.faceSnaps)*/

}
/*usnapFaceSnapById(faceSnapId: number): void {
  const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
  if (faceSnap) {
    faceSnap.snapped=false;
    faceSnap.nbrJaime--;
  } else {
      throw new Error('FaceSnap not found!');
  }*/
}


