import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-delete-confirm',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,

    NzIconModule,
  ],
  templateUrl: './delete-confirm.component.html',
  styleUrl: './delete-confirm.component.scss',
})
export class DeleteConfirmComponent {
  @Output() closeEvent = new EventEmitter<boolean>();
  @Output() deleteConfirm = new EventEmitter<any>();

  closeModal(): void {
    this.closeEvent.emit();
  }

  delete(): void {
    this.deleteConfirm.emit();
  }
}
