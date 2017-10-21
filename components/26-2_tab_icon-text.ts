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
  Icon and Text
  Demo Source
  To add text and an icon inside of a tab, use the tab-icon and tab-title attributes:
  
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
  class TabsTextContentPage {
    constructor() {}
  }
  
  @Component({
    template: `
    <ion-tabs>
      <ion-tab tabIcon="water" tabTitle="Water" [root]="tab1"></ion-tab>
      <ion-tab tabIcon="leaf" tabTitle="Life" [root]="tab2"></ion-tab>
      <ion-tab tabIcon="flame" tabTitle="Fire" [root]="tab3"></ion-tab>
      <ion-tab tabIcon="magnet" tabTitle="Force" [root]="tab4"></ion-tab>
    </ion-tabs>`
  })
  export class TabsTextPage {
    constructor() {
      this.tab1 = TabsTextContentPage;
      this.tab2 = TabsTextContentPage;
      ...
    }
  }