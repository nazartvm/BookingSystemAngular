import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RoomcreateComponent } from './Components/roomcreate/roomcreate.component';
import { RoomlistComponent } from './Components/roomlist/roomlist.component';
import { AuthGuardService } from './Services/auth-guard.service';

const routes: Routes = 
[{component:LoginComponent,path:'login'},
{component:RoomlistComponent,path:'',canActivate: [AuthGuardService]},
{component:RoomcreateComponent,path:'roomcreation',canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
