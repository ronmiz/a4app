import { Component, OnInit } from '@angular/core';
import { Console } from '@angular/core/src/console';
import { DataService } from '../../services/data.service';


const newLocal: string = 'app-user';

@Component({
  selector: newLocal,
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  massage:any;
  posts:Post[];
  isEdit:boolean = false;
 
  constructor(private dataService:DataService) {
    console.log( 'constractor user is up ...') ;

   }

  ngOnInit() {

    this.name = 'john Doe'
    this.age = 13;
    this.address = {
        street :'77o Estern park way Brookline ',
        city   :'New York',
        state  : ' NY'
    }
    this.hobbies = ['write code','play music','watch movies'];
     this.dataService.getPostes().subscribe((posts) => {
       //console.log(posts);
       this.posts = posts;
     });
  }
  onClick(){
    console.log('hi the butto was clicked');
    this.name = 'Ron Mizrachi';
   // this.hobbies.push('new hobbe');
  }
  toggleEdit(){
    this.isEdit = !this.isEdit;
  }
  addHobbe(hobby){
    console.log(hobby);
    //this.name = 'Ron Mizrachi';
    this.hobbies.push(hobby);
    return false;

  }
  deleteHobby(hobby){
    console.log(hobby);
    for(let i = 0; i<this.hobbies.length;i++){
      if(this.hobbies[i] == hobby){
        this.hobbies.splice(i, 1);
      }
    }
  }
}


interface Address{
  street:string,
  city:string,
  state:string
}
interface Post{
  id:number,
  title:string,
  body:string,
  userId:number
}
