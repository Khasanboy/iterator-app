import { Component, Injectable } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { AppResponse } from '../../models/app-response';
import { ApiService } from '../../services/api.service';
import { LoaderComponent } from '../loader/loader.component';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterModule],
      declarations: [HomeComponent, MockLoaderComponent],
      providers: [
        { provide: ApiService, useClass: MockApiService },
        { provide: Router, useClass: MockRouter }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create start component', () => {
    expect(component).toBeTruthy();
  });

  it('should call retrieveData function with button click', async(() => {
    fixture.detectChanges();
    spyOn(component, 'retrieveData');
    const compiled = fixture.debugElement.nativeElement;
    const button = compiled.querySelector('button');
    button.click();
    expect(component.retrieveData).toHaveBeenCalled();
  }));

  it('should call filterData function', async(() => {
    fixture.detectChanges();
    spyOn(component, 'filterData');
    const compiled = fixture.debugElement.nativeElement;
    const button = compiled.querySelector('button');
    button.click();
    expect(component.filterData).toHaveBeenCalled();
  }));

  it('should call loaderComponent open method', async(() => {
    fixture.detectChanges();
    spyOn(component.loaderComponent, 'open');
    component.retrieveData();
     expect(component.loaderComponent.open).toHaveBeenCalled();
  }));

  it('should call loaderComponent close method', async(() => {
    fixture.detectChanges();
    spyOn(component.loaderComponent, 'close');
    component.retrieveData();
     expect(component.loaderComponent.close).toHaveBeenCalled();
  }));

  it('should navigate to /search/71', async(() => {
    const router = TestBed.get(Router);
    const service1 = new MockApiService(null);
    const component1 = new HomeComponent(service1, router);
    component1.loaderComponent = new MockLoaderComponent();
    const spy = spyOn(router, 'navigate');
    component1.retrieveData();
     expect(spy).toHaveBeenCalledWith(['search/71']);
  }));

});

@Component({
  selector: 'app-loader',
  template: `
  <div id="overlay">
</div>`
})
class MockLoaderComponent extends LoaderComponent {
  loaderOpen = jasmine.createSpy('open').and.returnValue(null);

  loaderClose = jasmine.createSpy('close').and.returnValue(null);
}

@Injectable({
  providedIn: 'root'
})
class MockApiService extends ApiService {
  getData(url?: string) {
    return from([
      new AppResponse('xhr', 'example.com'),
      new AppResponse('redirect', 'http://localhost:8080/api/search/71')
    ]);
  }
}

class MockRouter {
  navigate(url: string) {
    return url;
  }
}
