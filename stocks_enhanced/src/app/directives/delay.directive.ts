import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[delay]'
})
export class DelayDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    // more about: https://angular.io/api/core/ViewContainerRef
    private viewContainer: ViewContainerRef

  ) {}

  @Input() set delay(ms: number) {
    setTimeout(() => {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }, ms);
  }

  

}
