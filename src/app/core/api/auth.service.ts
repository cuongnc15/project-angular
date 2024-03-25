import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, EMPTY, map, Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment.prod';
import { StorageService } from '../services/storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isUserLoggedIn!: boolean;
  public apiUrl = environment.API_URL;

  constructor(
    private http: HttpClient,
    private router: Router,
    private storageService: StorageService
  ) {}

  login(body: any): Observable<any> {
    return this.http.post(this.apiUrl + '/api/authenticate', body);
  }

  logout(): void {
    this.storageService.clearStorage();
    this.router.navigate(['/auth/login']);
  }
}
