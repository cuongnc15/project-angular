import { ChangeDetectorRef, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { ShareTableModule } from '../../shared/components/share-table/share-table.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ListPostService } from '../../core/api/listPost.service';
import { DeleteConfirmComponent } from './delete-confirm/delete-confirm.component';
import { CommonModule } from '@angular/common';
import { NzModalService, NzModalModule } from 'ng-zorro-antd/modal';
import { SnackbarService } from '../../core/services/snackbar.service';
import { CreateComponent } from './create-popup/create-popup.component';

@Component({
  selector: 'app-class-edit',
  standalone: true,
  templateUrl: './class-edit.component.html',
  styleUrl: './class-edit.component.css',
  imports: [
    CommonModule,
    NzDropDownModule,
    RouterModule,
    RouterOutlet,
    ReactiveFormsModule,
    ShareTableModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NzIconModule,
    NzModalModule,
    DeleteConfirmComponent,
    CreateComponent,
  ],
})
export class ClassEditComponent {
  applyForm = new FormGroup({
    tittle: new FormControl(''),
    tag: new FormControl(''),
    keyword: new FormControl(''),
    creator: new FormControl(''),
    date: new FormControl(''),
  });

  constructor(
    private listPostService: ListPostService,
    private cdr: ChangeDetectorRef,
    private modal: NzModalService,
    private _snackBar: SnackbarService,
  ) {}

  ngOnInit(): void {
    this.getAllPost();
  }

  public bodyPost = {
    status: 0,
    page: 1,
    pageSize: 10,
  };

  totalPage: number = 0;

  getAllPost() {
    this.listPostService.getAllPost(this.bodyPost).subscribe((res) => {
      this.data = res.data;
      console.log(res.data);
      this.totalPage = res.totalCount;
      this.cdr.detectChanges();
    });
  }

  deletePost() {
    this.listPostService.deletePost(this.rowID).subscribe(
      (res) => {
        console.log(res);
        this.totalPage = res.totalCount;
        this.cdr.detectChanges();
        this._snackBar.success('Xóa thành công');
        this.getAllPost();
      },
      (err) => {
        this._snackBar.error('Có lỗi xảy ra');
      },
    );
    this.modalCustom = false;
  }

  modalCustom: boolean = false;
  modalCreate: boolean = false;
  rowID: '';
  showDeleteConfirm(rowID: any): void {
    this.modalCustom = true;
    this.rowID = rowID;
  }

  closeModal(): void {
    this.modalCustom = false;
  }

  showCreate(): void {
    this.modalCreate = true;
  }

  closeCreate(): void {
    this.modalCreate = false;
  }

  showDuplicateConfirm(rowID: any) {
    this.modal.confirm({
      nzTitle: 'Bạn có chắc chắn muốn nhân bản bài viết này không?',
      nzOkText: 'Có',
      nzOkType: 'primary',
      nzCentered: true,
      nzOnOk: () => {
        this.listPostService.showDuplicateConfirm(rowID).subscribe(
          (res) => {
            this._snackBar.success('Nhân bản thành công');
            this.getAllPost();
          },
          (err) => {
            this._snackBar.error('Có lỗi xảy ra');
          },
        );
      },
      nzCancelText: 'Không',
      nzOnCancel: () => console.log('Cancel'),
    });
  }

  changeSearch(): void {
    Object.entries(this.applyForm.value).some(([key, value]) => value !== '')
      ? (document
          .getElementById('search')
          ?.classList.remove('text-[#999999]', 'bg-[#E7F7F4]'),
        document
          .getElementById('search')
          ?.classList.add('text-white', 'bg-[#42A4F5]'))
      : (document
          .getElementById('search')
          ?.classList.add('text-[#999999]', 'bg-[#E7F7F4]'),
        document
          .getElementById('search')
          ?.classList.remove('text-white', 'bg-[#42A4F5]'));
  }

  public isLoading: boolean = false;
  public totalCount: number = 200;
  data: any = [];
  changePage($event: number) {
    this.bodyPost.page = $event;
    this.getAllPost();
  }
  changePageSize($event: number) {
    this.bodyPost.pageSize = $event;
    this.getAllPost();
  }
}
