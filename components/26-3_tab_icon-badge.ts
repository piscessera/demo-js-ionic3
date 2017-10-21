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
  class TabBadgePage {
    constructor() {}
  }
  
  @Component({
    template: `
      <ion-tabs>
        <ion-tab tabIcon="call" [root]="tabOne" tabBadge="3" tabBadgeStyle="danger"></ion-tab>
        <ion-tab tabIcon="chatbubbles" [root]="tabTwo" tabBadge="14" tabBadgeStyle="danger"></ion-tab>
        <ion-tab tabIcon="musical-notes" [root]="tabThree"></ion-tab>
      </ion-tabs>
      `
  })
  export class BadgesPage {
    constructor() {
      this.tabOne = TabBadgePage;
      this.tabTwo = TabBadgePage;
    }
  }