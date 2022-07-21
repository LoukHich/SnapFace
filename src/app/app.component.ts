import { NgIfContext } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { interval,filter, map, Observable, tap, take, mergeMap, of, delay, from, Subscription, concatMap } from 'rxjs';
import { Facesnape } from './models/face-snape.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 // mySnape!:Facesnape[];
  //interval$!:Observable<String>
  //yourSnap!:Facesnape;
  title = 'snapface';
  redTrainsCalled = 0;
  yellowTrainsCalled = 0;
  /* myObservable= new Observable((observer)=>{
     console.log('observable starts')
   /*  observer.next('1')
     observer.next('2')
     observer.next('3')
     observer.next('4')
     observer.next('5')*/
    /* setTimeout(()=>{ observer.next('1')},1000)
     setTimeout(()=>{ observer.next('2')},2000)
     setTimeout(()=>{ observer.next('3')},3000)
     setTimeout(()=>{ observer.next('4')},4000)
     setTimeout(()=>{ observer.next('5')},5000)



   })*/
 loogger(texte:string){
   console.log(texte)
 }

 getTrainObservable$(color: 'rouge' | 'jaune') {
  const isRedTrain = color === 'rouge';
  isRedTrain ? this.redTrainsCalled++ : this.yellowTrainsCalled++;
  const trainIndex = isRedTrain ? this.redTrainsCalled : this.yellowTrainsCalled;
  console.log(`Train %c${color} ${trainIndex} appelé !`, `text-decoration: underline; color: ${this.translateColor(color)}`);
  return of({ color, trainIndex }).pipe(
    delay(isRedTrain ? 5000 : 6000)
  );
}

translateColor(color: 'rouge' | 'jaune') {
  return color === 'rouge' ? 'red' : 'yellow';
}

arr1 = [1,2,3,6,4,5]
arr2 = ['A','B','C','D','E','F']
arr3=['will', 'willAlex', 'willAlexandertf', 'willAlexander']
myObservable = from(this.arr1).pipe(map((val)=>val*2),filter((val)=>val>7))

teste = from(this.arr3).pipe(filter((input)=> input.length>=8))


yourObservable = interval(1000)


 interval$ = interval(500);

counter!:Subscription;
unsubscribes() {
  console.log("fin")
    this.counter.unsubscribe()
  }
/*myObservable =  Observable.create((observer)=>{

  console.log("Observable start")
  setTimeout(()=>{observer.next('1')},4000)
 // setTimeout(()=>{observer.error(new Error("Il ya un Error !!!"))},3000)
  setTimeout(()=>{observer.next('3')},1000)
  setTimeout(()=>{observer.next('4')},1000)
  setTimeout(()=>{observer.next('5')},1000)
  setTimeout(()=>{observer.complete()},5000)
  /*observer.next('1')
  observer.next('2')
  observer.next('3')
  observer.next('4')
  observer.next('5')*/
//})*/

  //ngOnInit(): void {
//this.teste.subscribe((val)=>console.log(val))
  //  interval(3000).subscribe(value => console.log(value % 3 !== 0 ? 'Tick' : 'BANG'));
    //this.interval$.subscribe((val)=>console.log(val));
//this.counter=this.yourObservable.subscribe((val)=>console.log(val))
/*this.myObservable.subscribe((val)=>{
 console.log(val)
},(error)=>{alert(error)},()=>{alert('Salina')})*/
//this.yourObservable.subscribe((val)=>console.log(val))
   // interval(500).unsubscribe();
   //interval(1000).subscribe(value => console.log(value % 3 !== 0 ? 'Tick' : 'BANG'));
  /* this.interval$ = interval(5000).pipe(
    filter(value=> value %3 ===0),
    map(value=>value%2===0?
    `je suis ${value} pair`:`je suis  ${value} impaire`),
    tap(value=>this.loogger(value)));*/
    //interval$.subscribe(value => console.log(value));
   /* setTimeout(() => {
      interval$.subscribe(value => console.log(value));
  },3000);*/

  /*  this.mySnape= new Facesnape("HP EliteBook ",
    "https://ma.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/69/995183/1.jpg?4986",
    "Hp Ordinateur Portable HP EliteBook 820- i5 - 6ème génération - remise à neuf",
    new Date(),0,true)
    this.yourSnap=new Facesnape("HP EliteBook ",
    "https://ma.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/69/995183/1.jpg?4986",
    "Hp Ordinateur Portable HP EliteBook 820- i7 - 6ème génération - remise à neuf",  new Date(),0,false)
   /* this.myObservable.subscribe((val)=>{
      console.log(val)
    })*/
 // }


  ngOnInit():void  {
  /*  interval(1000).pipe(
      take(10),
      map(value => value % 2 === 0 ? 'rouge' : 'jaune'),
      tap(color => console.log(`La lumière s'allume en %c${color}`, `color: ${this.translateColor(color)}`)),
     concatMap(color => this.getTrainObservable$(color)),
      tap(train => console.log(`Train %c${train.color} ${train.trainIndex} arrivé !`, `font-weight: bold; color: ${this.translateColor(train.color)}`))
    ).subscribe();*/
  }



}
