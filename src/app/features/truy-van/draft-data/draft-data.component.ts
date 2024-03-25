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
import { ShareTableModule } from '../../../shared/components/share-table/share-table.module';

@Component({
  selector: 'app-draft-data',
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
    ShareTableModule,
  ],
  templateUrl: './draft-data.component.html',
  styleUrl: './draft-data.component.scss',
})
export class DraftDataComponent {
  @Output() closeDraftData = new EventEmitter<boolean>();

  closeModal(): void {
    this.closeDraftData.emit();
  }

  data: any = [
    {
      name: 'Mini App - Kỹ thuật nhỏ, Hiệu suất lớ...',
      source: 'Zalo Mini App là một trong những giải pháp nhỏ gọn, ...',
      select: '#Mini App',
      rule: 'thanh02112022',
    },
    {
      name: 'Mini App - Kỹ thuật nhỏ, Hiệu suất lớ...',
      source: 'Zalo Mini App là một trong những giải pháp nhỏ gọn, ...',
      select: '#Mini App',
      rule: 'thanh02112022',
    },
    {
      name: 'Mini App - Kỹ thuật nhỏ, Hiệu suất lớ...',
      source: 'Zalo Mini App là một trong những giải pháp nhỏ gọn, ...',
      select: '#Mini App',
      rule: 'thanh02112022',
    },
    {
      name: 'Mini App - Kỹ thuật nhỏ, Hiệu suất lớ...',
      source: 'Zalo Mini App là một trong những giải pháp nhỏ gọn, ...',
      select: '#Mini App',
      rule: 'thanh02112022',
    },
    {
      name: 'Mini App - Kỹ thuật nhỏ, Hiệu suất lớ...',
      source: 'Zalo Mini App là một trong những giải pháp nhỏ gọn, ...',
      select: '#Mini App',
      rule: 'thanh02112022',
    },
    {
      name: 'Mini App - Kỹ thuật nhỏ, Hiệu suất lớ...',
      source: 'Zalo Mini App là một trong những giải pháp nhỏ gọn, ...',
      select: '#Mini App',
      rule: 'thanh02112022',
    },
  ];
  public isLoading: boolean = false;
}
