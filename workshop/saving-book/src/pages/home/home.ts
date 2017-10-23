import { Component } from '@angular/core';
import { AlertController, NavController, IonicPage, MenuController, PopoverController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController, 
    public menu: MenuController, 
    public popoverCtrl: PopoverController,
    public alertCtrl: AlertController) {

  } 

  ionViewDidLoad() {
    this.menu.enable(true); //enable side menu
  }

  presentPopover(event) {
    let popover = this.popoverCtrl.create('HomePopOverPage');
    popover.present({
      ev: event
    });
  }

  newWallet() {
    this.navCtrl.push('NewWalletPage');
  }

  viewDetail() {
    this.navCtrl.push('WalletDetailPage');
  }

  remove() {
    let confirm = this.alertCtrl.create({
      title: 'Confirmation',
      message: 'Are you want to remove this wallet?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'OK',
          handler: () => {
            console.log('OK clicked');
          }
        }
      ]
    });
    confirm.present();
  }
}
