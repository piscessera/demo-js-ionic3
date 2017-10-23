import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the NewWalletPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-wallet',
  templateUrl: 'new-wallet.html',
})
export class NewWalletPage {

  constructor(
    public menu: MenuController,
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewWalletPage');
    this.menu.enable(false);
  }

  save() {
    let toast = this.toastCtrl.create({
      message: 'Wallet was added successfully',
      duration: 3000,
      position: 'top'
    });

    toast.present();

    this.navCtrl.pop();
  }

}
