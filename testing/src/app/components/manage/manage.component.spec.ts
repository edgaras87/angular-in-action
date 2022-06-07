import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { MockSymbolsList } from "src/app/services/stocks.mock";
import { StocksService } from "src/app/services/stocks.service";
import { StubStocksService } from "src/app/services/stocks.service.stub";
import { ManageComponent } from "./manage.component";


describe('ManageComponent', () => {
    let component: ManageComponent;
    let fixture: ComponentFixture<ManageComponent>;
    let el: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                FormsModule,
                HttpClientTestingModule
            ],
            declarations: [
                ManageComponent
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
        fixture = TestBed.createComponent(ManageComponent);
        component = fixture.componentInstance;
        el = fixture.debugElement.nativeElement;
        fixture.detectChanges();
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should add or remove symbols from the list', () => {
        expect(component.symbols).toEqual(MockSymbolsList);
        component.stock = 'ABC';

        component.add();
        expect(component.symbols).toEqual([...MockSymbolsList, 'ABC']);

        component.remove('ABC');
        expect(component.symbols).toEqual(MockSymbolsList);
    });

    it('should render the template', () => {
        const items = el.querySelectorAll("td.mdl-data-table__cell--non-numeric");

        for(let i = 0; i < items.length; ++i){
            expect(items[i].innerHTML).toContain(MockSymbolsList[i]);
        }
    });


});