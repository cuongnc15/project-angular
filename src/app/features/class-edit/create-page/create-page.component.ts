import { Component } from '@angular/core';
import { CreateDataService } from '../../../core/services/create-report.service';
import { ThemMoiComponent } from '../../truy-van/them-moi/them-moi.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-page',
  standalone: true,
  templateUrl: './create-page.component.html',
  styleUrl: './create-page.component.scss',
  imports: [ThemMoiComponent, CommonModule],
})
export class CreatePageComponent {
  reportTitle: string = '';
  queryName: string = '';

  constructor(private createDataService: CreateDataService) {}

  ngOnInit(): void {
    this.createDataService.currentReportTitle.subscribe(
      (title) => (this.reportTitle = title),
    );
  }

  modalCreate: boolean = false;

  showModalTruyVan(): void {
    this.modalCreate = true;
  }

  closeModalTruyVan(): void {
    this.modalCreate = false;
  }
}
