import { SlidesPage } from './../pages/slides/slides';
import { MedicoPage } from './../pages/medico/medico';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { MeudoutorPage } from './../pages/meudoutor/meudoutor';
import { AgendamentoPage } from './../pages/agendamento/agendamento';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AgendamentoPage,
    MeudoutorPage,
    MedicoPage,
    SlidesPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AgendamentoPage,
    MeudoutorPage,
    MedicoPage,
    SlidesPage
  ],

  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
