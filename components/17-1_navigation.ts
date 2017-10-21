import {StartPage} from 'start'

@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
class MyApp {
  // First page to push onto the stack
  rootPage = StartPage;
}

//======================

@Component({
    template: `
    <ion-header>
      <ion-navbar>
        <ion-title>Login</ion-title>
      </ion-navbar>
    </ion-header>
  
    <ion-content>Hello World</ion-content>`
  })
  export class StartPage {
    constructor(public navCtrl: NavController) {
    }
  }

//======================

  @Component({
    template: `
    <ion-header>
      <ion-navbar>
        <ion-title>Login</ion-title>
      </ion-navbar>
    </ion-header>
  
    <ion-content>
      <button (click)="goToOtherPage()">
        Go to OtherPage
      </button>
    </ion-content>`
  })
  export class StartPage {
    constructor(public navCtrl: NavController) {}
  
    goToOtherPage() {
      //push another page onto the history stack
      //causing the nav controller to animate the new page in
      this.navCtrl.push(OtherPage);
    }
  }
  
  @Component({
    template: `
    <ion-header>
      <ion-navbar>
        <ion-title>Other Page</ion-title>
      </ion-navbar>
    </ion-header>
  
    <ion-content>I'm the other page!</ion-content>`
  })
  class OtherPage {}


//======================

@Component({
    template: `
    <ion-content>
      <button (click)="goBack()">
        There's no place like home
      </button>
    </ion-content>`
  })
  class OtherPage {
    constructor(public navCtrl: NavController) {}
  
    goBack() {
      this.navCtrl.pop();
    }
  }