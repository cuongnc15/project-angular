import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, EMPTY, map, Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment.prod';
import { StorageService } from '../services/storage.service';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  isUserLoggedIn!: boolean;
  public apiUrl = environment.API_URL + '/insight-lopoto';

  constructor(private http: HttpClient) {}

  viewReport1(startDate: any, endDate: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/report/view-1', {
      startDate: startDate,
      endDate: endDate,
    });
  }

  viewReport2(startDate: any, endDate: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/report/view-2', {
      startDate: startDate,
      endDate: endDate,
    });
  }

  viewReport4(startDate: any, endDate: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/report/view-4', {
      startDate: startDate,
      endDate: endDate,
      type: 'TBR'
    });
  }

  viewReport5(startDate: any, endDate: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/report/view-5', {
      startDate: startDate,
      endDate: endDate,
      type: 'TBR'
    });
  }

  viewReport6(startDate: any, endDate: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/report/view-6', {
      startDate: startDate,
      endDate: endDate,
      type: 'TBR'
    });
  }

  viewReport7(startDate: any, endDate: any, size: string): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/report/view-7', {
      startDate: startDate,
      endDate: endDate,
      size: size,
      type: 'TBR'
    });
  }

  viewReport8(startDate: any, endDate: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/report/view-8', {
      startDate: startDate,
      endDate: endDate,
      type: 'TBR'
    });
  }

  viewReport9(startDate: any, endDate: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/report/view-9', {
      startDate: startDate,
      endDate: endDate,
      type: 'TBR'
    });
  }

  downloadExcelReport(body: any, typeReport: string): Observable<Blob> {
    let url = this.apiUrl + '/Report/dowload-view' + typeReport
    return this.http
      .post(url, body, { responseType: 'blob' })
      .pipe(map((response: Blob) => response));
  }

  viewListCompanyImport(body: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/Report/CompanyImport', body);
  }

  viewListBrand(body: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/Report/ListBrand', body);
  }

  viewListSize(body: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/Report/ListSize', body);
  }

  viewListOriginal(body: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/Report/ListOriginal', body);
  }

  viewAllListSize(): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/sizes');
  }
}
