import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, EMPTY, map, Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment.prod';
import { StorageService } from '../services/storage.service';

@Injectable({
  providedIn: 'root',
})
export class ListPostService {
  isUserLoggedIn!: boolean;
  token = localStorage.getItem('token');
  public apiUrl = environment.API_URL;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  getAllPost(body: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });
    return this.http.post<any>(this.apiUrl + '/post/view-list-post', body, {
      headers,
    });
  }

  deletePost(body: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });
    return this.http.post<any>(
      this.apiUrl + '/post/move-to-recyclebin',
      { postId: body },
      {
        headers,
      },
    );
  }

  showDuplicateConfirm(body: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });
    return this.http.post<any>(
      this.apiUrl + '/post/duplicate-post',
      { postId: body },
      {
        headers,
      },
    );
  }
}
