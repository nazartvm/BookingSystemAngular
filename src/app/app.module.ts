import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { RoomlistComponent } from './Components/roomlist/roomlist.component';
import { RoomcreateComponent } from './Components/roomcreate/roomcreate.component';
import { AuthGuardService } from './Services/auth-guard.service';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RoomService } from './Services/room.service';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
export function tokenGetter() {
  return localStorage.getItem("jwt");
}
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RoomlistComponent,
    RoomcreateComponent
  ],
  imports: [
    NgxSpinnerModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:44393"],
        disallowedRoutes: []
      }
    }),
    NgbModule,
    BrowserAnimationsModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
