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

@Component({
  selector: 'app-create-popup',
  standalone: true,
  imports: [
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
  ],
  templateUrl: './create-popup.component.html',
  styleUrl: './create-popup.component.scss',
})
export class CreateComponent {
  @Output() closeCreate = new EventEmitter<boolean>();

  closeModal(): void {
    this.closeCreate.emit();
  }

  constructor(
    private router: Router,
    private createDataService: CreateDataService,
  ) {}

  ngOnInit(): void {}

  applyForm = new FormGroup({
    title: new FormControl(''),
  });

  createReport() {
    this.createDataService.changeReportTitle(this.applyForm.value.title);
    this.router.navigate(['/bao-cao/tao-moi']);
  }
}
