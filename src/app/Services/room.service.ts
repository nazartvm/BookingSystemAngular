import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { createresponse } from '../Models/createresponse.model';
import { response } from '../Models/response.model';
import { RoomCreate } from '../Models/RoomCreate.Model';
import { Room } from '../Models/rooms.model';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  //baseUrl="https://localhost:44393";
  baseUrl="https://indian-booking.azurewebsites.net";
  constructor(private http:HttpClient) { 
  }
  
  getRoomDetailsforOwner(pickedData:string):Observable<Room[]>{
    return this.http.get<Room[]>(`${this.baseUrl}/api/RoomAPI/GetRooms?pickedDate=`+pickedData, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": 'Bearer '+localStorage.getItem('jwt')
      })
    });
  }
  createRoomForowner(room:RoomCreate):Observable<createresponse>{
    return this.http.post<createresponse>(`${this.baseUrl}/api/RoomAPI/CreateRoom`, room, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": 'Bearer '+localStorage.getItem('jwt')
      })
    });
  }
}
