import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './components/container/container.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { APP_CONFIG, APP_SERVICE_CONFIG } from './AppConfig/appconfig.service';
import { RequestInterceptor } from './request.interceptor';
import { InitService } from './init.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppNavComponent } from './app-nav/app-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NotfoundComponent } from './notfound/notfound.component';

import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { HoverDirective } from './hover.directive';
import { EmailvalidatorDirective } from './emailvalidator/emailvalidator.directive';
import { RoomsModule } from './components/rooms/rooms.module';
import { RouteConfigToken } from './components/services/routeConfig.service';
import { LoginGuard } from './guards/login.guard';

function initFactory (initService: InitService) {
    return () => initService.init()
}
@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    EmployeeComponent,
    AppNavComponent,
    NotfoundComponent,
    LoginComponent,
    HoverDirective,
    EmailvalidatorDirective,
    
  ],
  imports: [BrowserModule,RoomsModule,AppRoutingModule, HttpClientModule, BrowserAnimationsModule, LayoutModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,FormsModule,],
  providers: [
    {
      provide: APP_SERVICE_CONFIG,
      useValue: APP_CONFIG,
    },
    {
      provide:HTTP_INTERCEPTORS,
      useClass:RequestInterceptor,
      multi:true 
    },
    {
      provide:RouteConfigToken,
      useValue:{title:'Home'} 
    },
    {
      provide:APP_INITIALIZER,
      useFactory:initFactory,
      deps:[InitService],
      multi:true
    }
    ,
   LoginGuard
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
