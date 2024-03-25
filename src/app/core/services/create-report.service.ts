import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CreateDataService {
  private reportTitleSource = new BehaviorSubject<any>('');
  currentReportTitle = this.reportTitleSource.asObservable();

  constructor() {}

  changeReportTitle(title: any) {
    this.reportTitleSource.next(title);
  }
}
