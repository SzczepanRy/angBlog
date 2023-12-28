import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ToggleComponent } from './toggle/toggle.component';
import { ToggleModule } from './toggle/toggle.module';
import { NavComponent } from './nav/nav.component';
import { ChatComponent } from './chat/chat.component';
import { PassValidatorDirective } from './passValidator/pass-validator.directive';
import { HttpClientModule } from '@angular/common/http';
import { APP_CONFIG, APP_SERVICE_CONF } from './AppConfig/apponfig.service';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavComponent,
    ChatComponent,
    PassValidatorDirective,
    ModalComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    ToggleModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: APP_SERVICE_CONF,
      useValue: APP_CONFIG,
    },
    HttpClientModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
