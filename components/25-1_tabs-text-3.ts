import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
...
})
class Tab1 {
  constructor(public navCtrl: NavController) {
    // Id is 1, nav refers to Tab1
    console.log(this.nav.id)
  }
}

@Component({
...
})
class Tab2 {
  constructor(public navCtrl: NavController) {
    // Id is 2, nav refers to Tab2
    console.log(this.nav.id)
  }
}