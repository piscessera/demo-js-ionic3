import { Component } from '@angular/core';
import { ToastController, IonicPage, NavController, NavParams } from 'ionic-angular';


import 'rxjs/add/operator/map';

import { TasksService } from '../../services/tasks.service';

/**
 * Generated class for the EditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {
  item : any;

  constructor(
    public toastCtrl: ToastController, 
    public navCtrl: NavController, 
    public navParams: NavParams,
    public tasksService: TasksService) {
      // copy object
      // this.item = JSON.parse(JSON.stringify(this.navParams.get('item')));
      this.item = this.navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPage');
  }

  save() {
    this.tasksService.save(this.item).subscribe((data) => {

      let toast = this.toastCtrl.create({
        message: "Save data successfully",
        duration: 3000
      });
      toast.present();
      this.navCtrl.pop();

    });
  }
}
