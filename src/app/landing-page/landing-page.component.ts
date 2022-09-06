import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  emailUser :string ="Nadori@gmail.com"
  emailUsera :string ="Nadori@agmail.com"
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
goToFace():void{
      this.router.navigateByUrl('facesnaps')
}
onSubmit(form:NgForm) :void{
  console.log(form.value)
  console.log(this.emailUser)
  console.log(this.emailUsera)
}
}
