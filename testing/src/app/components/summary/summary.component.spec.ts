import { CurrencyPipe, PercentPipe } from "@angular/common";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { CardTypeDirective } from "src/app/directives/card-type.directive";
import { ChangePipe } from "src/app/pipes/change.pipe";
import { SummaryComponent } from "./summary.component";


describe('SummaryComponent', () => {
    let component: SummaryComponent;
    let fixture: ComponentFixture<SummaryComponent>;
    let el: HTMLElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
//  The NoopAnimationsModule is used to support the animations dependencies that are
// required by the component, but when it runs, the animations don’t animate
                NoopAnimationsModule
            ],
            declarations: [
                SummaryComponent,
                ChangePipe,
                CardTypeDirective
            ],
            providers: [
                CurrencyPipe,
                PercentPipe
            ]
        });
    });

beforeEach(() => {
    fixture = TestBed.createComponent(SummaryComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement.nativeElement;
});

it('should render for a positive change', () => {
    component.stock = { symbol: 'abc', lastTradePriceOnly: 10, change: .25, changeInPercent: 0.025 };
    fixture.detectChanges();

    const content = el.querySelector('.mdl-card h4')?.innerHTML;
    expect(content).toContain('ABC');
    expect(content).toContain('$10.00');
    expect(content).toContain('$0.25 (2.50%)');

});

it('should render for a negative change', () => {
    component.stock = { symbol: 'abc', lastTradePriceOnly: 8.34, change: -1.43, changeInPercent: -0.0243 };
    fixture.detectChanges();

    const content = el.querySelector('.mdl-card h4')?.innerHTML;
    expect(content).toContain('ABC');
    expect(content).toContain('$8.34');
    expect(content).toContain('-$1.43 (-2.43%)');
});




});