import { LoadingController } from 'ionic-angular';

export class MyPage {
  constructor(public loadingCtrl: LoadingController) {
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
  }
}