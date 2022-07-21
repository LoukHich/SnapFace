export class Facesnape{
  id!:number;
  title!:string;
  urlImage!:string
  description!:string;
  createdDate!:Date;
  nbrJaime!:number
  snapped:boolean = false
  btnComportement:string="oh snape!"
  location?:string


  /*constructor(public title:string,
              public  urlImage:string,
              public description:string,
              public  createdDate:Date,
              public  nbrJaime:number,
              public snapped:boolean = false,
              public btnComportement:string="oh snape!"
           //   public snapped:boolean = false,

    ){}*/

  /*constructor(title:string,urlImage:string,description:string,createdDate:Date, nbrJaime:number,btnComportement:string){
             this.title=title;
             this.urlImage=urlImage;
             this.description=description;
             this.createdDate=createdDate;
             this.nbrJaime=nbrJaime;
             this.snapped=false;
             this.btnComportement="oh snape!"

  }*/
}
