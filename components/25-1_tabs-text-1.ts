import { Component } from '@angular/core';
import { ionicBootstrap } from 'ionic-angular';
import { Tab1 } from './tab1-page';
import { Tab2 } from './tab2-page';
@Component({
  template: `
    <ion-tabs>
      <ion-tab tabIcon="heart" [root]="tab1"></ion-tab>
      <ion-tab tabIcon="star" [root]="tab2"></ion-tab>
    </ion-tabs>`
})
class MyApp {

  tab1: any;
  tab2: any;

  constructor() {
    this.tab1 = Tab1;
    this.tab2 = Tab2;
  }
}