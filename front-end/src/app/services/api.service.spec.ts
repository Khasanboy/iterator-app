import { TestBed, inject } from '@angular/core/testing';

import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('ApiServiceService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ApiService, MockHttpClient]
    });
  });

  it('should be created', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));
});


@Injectable({
  providedIn: 'root'
})
class MockHttpClient  extends HttpClient {

}
