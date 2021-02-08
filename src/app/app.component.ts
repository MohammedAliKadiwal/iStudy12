import { Component } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private platform: Platform,
  ) {
    this.initializeApp();
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.show();
      this.statusBar.styleDefault();
      this.statusBar.backgroundColorByHexString('#FFFFFF');

      setTimeout(() => {
        this.splashScreen.hide();
      }, 3000);
    });
  }
}
