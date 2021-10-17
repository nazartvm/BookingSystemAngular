import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { Room } from 'src/app/Models/rooms.model';
import { LoginService } from 'src/app/Services/login.service';
import { RoomService } from 'src/app/Services/room.service';

@Component({
  selector: 'app-roomlist',
  templateUrl: './roomlist.component.html',
  styleUrls: ['./roomlist.component.css']
})
export class RoomlistComponent {
  responseModel:Room[]=[];
  model: NgbDateStruct;//to fetch date
  constructor(private roomservice:RoomService,private spinner: NgxSpinnerService,private route:Router) { }

  
  onChange(event:any):void{
    console.log(this.model);
    this.spinner.show();
    var time = this.model.day + "/" + this.model.month + "/" + this.model.year;
  this.roomservice.getRoomDetailsforOwner(time.toString()).subscribe((data)=>{
    this.responseModel=data;
    console.log(data);
    this.spinner.hide();
  })
  }
  redirectcreation(){
   this.route.navigate(['/roomcreation']);
  }
}
