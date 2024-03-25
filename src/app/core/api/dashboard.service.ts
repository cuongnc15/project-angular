import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, EMPTY, map, Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment.prod';
import { StorageService } from '../services/storage.service';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  isUserLoggedIn!: boolean;
  public apiUrl = environment.API_URL;

  constructor(private http: HttpClient) {}

  viewMainReport(body: any): Observable<any> {
    return this.http.post<any>(
      this.apiUrl + '/insight-lopoto/Report/search',
      body
    );
  }

  viewDroplist(type: number): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/insight-lopoto/DropList/view', {
      type: type,
    });
  }
}
