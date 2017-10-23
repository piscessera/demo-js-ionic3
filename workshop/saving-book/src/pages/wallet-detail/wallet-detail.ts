import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WalletDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wallet-detail',
  templateUrl: 'wallet-detail.html',
})
export class WalletDetailPage {
  tab1;
  tab2;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tab1 = 'WalletDetailTransactionPage';
    this.tab2 = 'WalletDetailManagePage';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WalletDetailPage');
  }

  add() {
    this.navCtrl.push('AddTransactionPage');
  }

}
