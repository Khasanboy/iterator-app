import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AppResponse, Activity } from '../../models/app-response';
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
    if (data.activity === Activity.xhr) {
      this.retrieveData(data.activityUrl);
    } else if (data.activity === Activity.redirect) {
      this.loaderComponent.close();
      this.loaderOpen = false;
      this.router.navigate(['search/71']);
    }
  }
}
