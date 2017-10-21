@Component({
    template: `
    <ion-header>
      <ion-navbar>
        <ion-title>Tabs</ion-title>
      </ion-navbar>
    </ion-header>
    <ion-content></ion-content>
    `
  })
  class TabContentPage {
    constructor() {}
  }
  
  @Component({
    template: `
    <ion-tabs>
      <ion-tab tabIcon="contact" [root]="tab1"></ion-tab>
      <ion-tab tabIcon="compass" [root]="tab2"></ion-tab>
      <ion-tab tabIcon="analytics" [root]="tab3"></ion-tab>
      <ion-tab tabIcon="settings" [root]="tab4"></ion-tab>
    </ion-tabs>`
  })
  export class TabsIconPage {
    constructor() {
      this.tab1 = TabContentPage;
      this.tab2 = TabContentPage;
      ...
    }
  }