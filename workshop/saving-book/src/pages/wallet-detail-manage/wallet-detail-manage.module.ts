import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WalletDetailManagePage } from './wallet-detail-manage';

@NgModule({
  declarations: [
    WalletDetailManagePage,
  ],
  imports: [
    IonicPageModule.forChild(WalletDetailManagePage),
  ],
})
export class WalletDetailManagePageModule {}
