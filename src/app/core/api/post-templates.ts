import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, EMPTY, map, Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment.prod';
import { StorageService } from '../services/storage.service';

@Injectable({
  providedIn: 'root',
})
export class TemplateService {
  isUserLoggedIn!: boolean;
  token = localStorage.getItem('token');
  public apiUrl = environment.API_URL;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  getAllTemplate(body: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });
    return this.http.get<any>(
      this.apiUrl +
        '/Warehouse/template/get-all-template' +
        `?Page=${body.Page}&PageSize=${body.PageSize}`,
      {
        headers,
      },
    );
  }
}
