import { Component, ComponentFactoryResolver, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';
import { AlertComponent } from './alert/alert.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'datacenter';

  @ViewChild(DashboardComponent) dashboard: DashboardComponent;
  @ViewChild('alertBox', {static: true,read: ViewContainerRef}) container: ViewContainerRef;
  alertRef?: ComponentRef<AlertComponent>;
  
  constructor(private ComponentFactoryResolver: ComponentFactoryResolver) {}

  myalert(date: Date) {
    if(!this.alertRef) {
      const alertComponent = this.ComponentFactoryResolver.resolveComponentFactory(AlertComponent);
      this.alertRef = this.container.createComponent(alertComponent);
    }
    this.alertRef.instance.date = date;
    this.alertRef.changeDetectorRef.detectChanges();

    setTimeout(() => this.destroyAlert(), 5000);
  }

  destroyAlert() {
    if(this.alertRef) {
      this.alertRef.destroy();
      delete this.alertRef;
    }
  }

  refresh() {
    this.dashboard.generateData();
  }

}
