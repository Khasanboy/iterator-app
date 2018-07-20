import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AppResponse } from '../../models/app-response';
import { ApiService } from '../../services/api.service';
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @ViewChild('viewAppLoader') loaderComponent: LoaderComponent; // This a child component to open the loader
  loaderOpen = false; // A flag to open loader only once in the beginning of the itiration

  constructor(private apiService: ApiService, private router: Router) {}

  // This function could be recursive function for better understanding and testing purposes divaded to two functions
  retrieveData(url?: string) {
    if (!this.loaderOpen) {
      this.loaderOpen = true;
      this.loaderComponent.open();
    }

    this.apiService.getData(url).subscribe(
      (data: AppResponse) => {
        this.filterData(data);
      },
      error => {
        console.log('Error happened');
        this.loaderComponent.close();
        this.loaderOpen = false;
      }
    );
  }

  filterData(data: AppResponse) {
    if (data.activity === 'xhr') {
      // This line is used here to cut the string from 'http://localhost:8080/api/search/71 to only api/search/71
      // as I am using proxy config file that contains the host
      data.activityUrl = data.activityUrl.substr(21);
      this.retrieveData(data.activityUrl);
    } else if (data.activity === 'redirect') {
      this.loaderComponent.close();
      this.loaderOpen = false;
      // This line is used here to cut the string from 'http://localhost:8080/api/search/71 to only search/71 as
      // I am using proxy config file that contains the host and i have rouing fot search/:id
      data.activityUrl = data.activityUrl.substr(26);
      this.router.navigate([data.activityUrl.toString()]);
    }
  }
}
