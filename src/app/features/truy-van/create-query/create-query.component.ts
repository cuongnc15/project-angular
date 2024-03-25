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
import { OnInit } from '@angular/core';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { DraftDataComponent } from '../draft-data/draft-data.component';
@Component({
  selector: 'app-create-query',
  standalone: true,
  templateUrl: './create-query.component.html',
  styleUrl: './create-query.component.scss',
  imports: [
    NzSelectModule,
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
    DraftDataComponent,
  ],
})
export class CreateQueryComponent {
  constructor(private router: Router) {}

  applyForm = new FormGroup({
    title: new FormControl(''),
  });

  closeModal() {
    this.router.navigate(['truy-van']);
  }

  listOfOption: Array<{ label: string; value: string }> = [
    {
      value: '0',
      label: 'lop o to',
    },
    {
      value: '1',
      label: 'lop o to',
    },
  ];
  listOfTagOptions = [
    {
      value: '0',
      label: 'lop o to',
    },
    {
      value: '0',
      label: 'lop o to',
    },
  ];

  ngOnInit(): void {
    const children: Array<{ label: string; value: string }> = [];
    for (let i = 10; i < 36; i++) {
      children.push({ label: i.toString(36) + i, value: i.toString(36) + i });
    }
    this.listOfOption = children;
  }

  modalDraftData: boolean = false;

  showDraftData(): void {
    this.modalDraftData = true;
  }

  closeDraftData(): void {
    this.modalDraftData = false;
  }
}
