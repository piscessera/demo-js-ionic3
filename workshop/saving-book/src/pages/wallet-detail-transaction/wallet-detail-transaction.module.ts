import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WalletDetailTransactionPage } from './wallet-detail-transaction';

@NgModule({
  declarations: [
    WalletDetailTransactionPage,
  ],
  imports: [
    IonicPageModule.forChild(WalletDetailTransactionPage),
  ],
})
export class WalletDetailTransactionPageModule {}
