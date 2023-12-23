import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouteReuseStrategy, RouterModule } from "@angular/router";
import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { MbscModule } from "@mobiscroll/angular-ivy";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AgendaSlotComponent } from "./ui/home-page/children/agenda-slot/agenda-slot.component";
import { HomePageComponent } from "./ui/home-page/component/home-page.component";
import { SelectMbscEventalendarViewPipe } from "./ui/home-page/pipes/select-mbsc-eventcalendar-view.pipe";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AgendaSlotComponent,
    SelectMbscEventalendarViewPipe,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    MbscModule,
    IonicModule.forRoot({
      animated: true,
      mode: 'ios',
    }),
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {}
}
