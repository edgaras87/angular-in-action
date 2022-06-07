import { HttpClientTestingModule } from "@angular/common/http/testing";
import { Component, DebugElement, Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { CardHoverDirective } from "src/app/directives/card-hover.directive";
import { CardTypeDirective } from "src/app/directives/card-type.directive";
import { MockSymbolsList } from "src/app/services/stocks.mock";
import { StockInterface, StocksService } from "src/app/services/stocks.service";
import { StubStocksService } from "src/app/services/stocks.service.stub";
import { DashboardComponent } from "./dashboard.component";


@Directive({
    selector: '[delay]'
})
class StubDelayDirective {
    
    @Input() set delay(ms: number) {
        this.viewContainer.createEmbeddedView(this.templateRef);
    }

    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef ) {}
    
}

@Component({
    selector: 'summary',
    template: '<div class="mdl-card">{{stock}}</div>'
})
class StubSummaryComponent {
    @Input() stock: StockInterface;
}

describe('DashboardComponent', () => {
    let component: DashboardComponent;
    let fixture: ComponentFixture<DashboardComponent>;
    let de: DebugElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            declarations: [
                DashboardComponent,
                StubSummaryComponent,
                StubDelayDirective,
                CardTypeDirective,
                CardHoverDirective
            ],
            providers: [
                {
                    provide: StocksService,
                    useClass: StubStocksService
                }
            ]
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DashboardComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement;
        //expect(component.stocks).toBeFalse();
        fixture.detectChanges();
        expect(component.stocks).toBeTruthy();
        
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should render the twmplate', () => {
        expect(de.query(By.css('.mdl-cell')).properties['innerHTML']).not.toContain('Loading');
        expect(de.queryAll(By.directive(StubSummaryComponent)).length).toEqual(MockSymbolsList.length);
    });

});



