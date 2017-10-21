@Component({
    template: '<ion-nav #myNav [root]="rootPage"></ion-nav>'
  })
  export class MyApp {
    @ViewChild('myNav') nav
    rootPage = TabsPage;
  
    // Wait for the components in MyApp's template to be initialized
    // In this case, we are waiting for the Nav identified by
    // the template reference variable #myNav
    ngAfterViewInit() {
      // Let's navigate from TabsPage to Page1
      this.nav.push(LoginPage);
    }
  }