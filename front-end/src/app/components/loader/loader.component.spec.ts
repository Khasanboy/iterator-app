import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoaderComponent } from './loader.component';


describe('LoaderComponent', () => {
  let component: LoaderComponent;
  let fixture: ComponentFixture<LoaderComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoaderComponent ],
      providers: [
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create loader component', () => {
    expect(component).toBeTruthy();
  });

  it('should change the display of overlay element to block', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    component.open();
    expect(compiled.querySelector('#overlay').style.display).toBe('block');
  }));

  it('should change the display of overlay element to none', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    component.close();
    expect(compiled.querySelector('#overlay').style.display).toBe('none');
  }));

});
