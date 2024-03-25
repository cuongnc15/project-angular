import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { CreateDataService } from '../../../core/services/create-report.service';
import { ShareTableModule } from '../../../shared/components/share-table/share-table.module';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

@Component({
  selector: 'app-them-moi',
  standalone: true,
  templateUrl: './them-moi.component.html',
  styleUrl: './them-moi.component.scss',
  imports: [
    NzCheckboxModule,
    CommonModule,
    RouterOutlet,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    RouterModule,
    NzIconModule,
    ReactiveFormsModule,
    ShareTableModule,
  ],
})
export class ThemMoiComponent {
  @Output() closeModalTruyVan = new EventEmitter<boolean>();
  checked = false;
  constructor(
    private router: Router,
    private createDataService: CreateDataService,
  ) {}

  closeModal(): void {
    this.closeModalTruyVan.emit();
  }

  applyForm = new FormGroup({
    title: new FormControl(''),
  });

  addTruyVanConfirm(): void {
    this.router.navigate(['/truy-van/tao-moi']);
    this.closeModal();
  }
  public isLoading: boolean = false;

  data: any = [
    {
      name: 'asdxz',
      source: 'asd',
      select: 'asd',
      rule: 'asd',
    },
  ];
}
