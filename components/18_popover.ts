import { PopoverController } from 'ionic-angular';
import { MyPopOverPage } from './my-pop-over';

export class MyPage {
  constructor(public popoverCtrl: PopoverController) {
  }

  presentPopover() {
    let popover = this.popoverCtrl.create(MyPopOverPage);
    popover.present();
  }
}