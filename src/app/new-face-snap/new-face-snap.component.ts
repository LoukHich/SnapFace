import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Facesnape } from '../models/face-snape.models';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-new-face-snap',
  templateUrl: './new-face-snap.component.html',
  styleUrls: ['./new-face-snap.component.css']
})
export class NewFaceSnapComponent implements OnInit {
   snapForm!:FormGroup
   faceSnapPreview$!:Observable<Facesnape>
   urlRegex !:RegExp
  constructor(private formBuilder :FormBuilder,
                 private facesnapService: FaceSnapsService,
                 private router:Router) { }

  ngOnInit(): void {
    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
this.snapForm= this.formBuilder.group({
  title: [null, [Validators.required]],
  description: [null,[Validators.required]],
  urlImage: [null,[Validators.required,Validators.pattern(this.urlRegex)]],
  location: [null]

},{
  updateOn: 'blur'
})

  this.faceSnapPreview$ = this.snapForm.valueChanges.pipe(
    map( (formValue) => ({
        ...formValue,
        createdDate: new Date(),
        nbrJaime: 0,
        id: 0,
        btnComportement:"oh snape!",
    }))
);


  }
  onSubmitForm() {
   //console.log(this.snapForm.value)
   this.facesnapService.addFaceSnap(this.snapForm.value);
   this.router.navigateByUrl('facesnaps')
}


}

