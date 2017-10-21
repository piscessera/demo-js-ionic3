import { ToastController } from 'ionic-angular';

export class MyPage {
  constructor(public toastCtrl: ToastController) {
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'User was added successfully',
      duration: 3000
    });
    toast.present();
  }
}