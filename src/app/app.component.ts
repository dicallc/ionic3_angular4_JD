import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {LearnTabPage} from "../pages/learn-tab-page/learn-tab-page";
// import {Splash} from "../pages/splash/splash";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LearnTabPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

