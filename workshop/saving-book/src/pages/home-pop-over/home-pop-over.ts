import { Component } from '@angular/core';
import { IonicPage, ViewController, App, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomePopOverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-pop-over',
  templateUrl: 'home-pop-over.html',
})
export class HomePopOverPage {

  constructor(public viewCtrl: ViewController, public app: App, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePopOverPage');
  }

  goToPage(page) {
    this.viewCtrl.dismiss();
    this.app.getRootNav().push(page);
  }
}
