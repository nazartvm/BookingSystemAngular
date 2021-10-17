import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { RoomCreate } from 'src/app/Models/RoomCreate.Model';
import { RoomService } from 'src/app/Services/room.service';

@Component({
  selector: 'app-roomcreate',
  templateUrl: './roomcreate.component.html',
  styleUrls: ['./roomcreate.component.css']
})
export class RoomcreateComponent implements OnInit {
  model:RoomCreate=new RoomCreate();
  constructor(private roomservice:RoomService,private spinner: NgxSpinnerService) { 
    this.model.RoomType=0;
    this.model.RoomNo=0;
    this.model.AboutRoom="";
  }

  ngOnInit(): void {
  }
  roomcreation():void{
    this.spinner.show();
   if(this.model.RoomNo==0&&this.model.AboutRoom!=""){
    this.spinner.hide();
        alert("enter all required details");
   }
   else if(this.model.RoomNo==0){
    this.spinner.hide();
      alert("enter the roomno");
   }
   else if(this.model.AboutRoom==""){
    this.spinner.hide();
    alert("enter the about room");
   }
   else{
      this.roomservice.createRoomForowner(this.model).subscribe((data)=>{
        this.spinner.hide();
        if(data.status=="Done"){
        alert("Room Created Successfully");
        }
        else{
          alert(data.message);
        }
        this.model.RoomType=0;
        this.model.RoomNo=0;
        this.model.AboutRoom="";
      });
   }
  }
}
