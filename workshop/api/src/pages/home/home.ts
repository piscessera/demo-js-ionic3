import { Component } from '@angular/core';
import { ToastController, AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SocialSharing } from '@ionic-native/social-sharing';

import 'rxjs/add/operator/map';

import { TasksService } from '../../services/tasks.service';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  items: any = [];

  constructor(
    public toastCtrl: ToastController,
    public alertCtrl: AlertController, 
    public navCtrl: NavController, 
    public navParams: NavParams,
    public taskService: TasksService,
    public inAppBrowser: InAppBrowser,
    public socialShare: SocialSharing
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    // this.taskService.list().subscribe((res) => {
    //   console.log(res);
    //   this.items = res;
    // });
  }

  ionViewWillEnter() {
    this.taskService.list().subscribe((res) => {
      console.log(res);
      this.items = res;
    }, (err) => {
      let toast = this.toastCtrl.create({
        message: "Can't connect service",
        duration: 3000
      });
      toast.present();
    });
  }

  edit(item) {
    console.log(item);
    this.navCtrl.push('EditPage', { item });
  }

  remove() {
    let confirm = this.alertCtrl.create({
      title: 'Confirmation',
      message: 'Are you want to remove this item?',
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

  open(url) {
    // this.inAppBrowser.create(url, '_system');
    this.inAppBrowser.create(url, '_blank');
  }

  share(item){
    this.socialShare.share(
      'Hello Ionic',
      item.name,
      item.image,
      item.url
    )
    .then(function() {
      console.log('Successful share');
    }).catch(function(error) {
      console.log('Error sharing:', error)
    });
  }
}
