import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { CommonModule } from '@angular/common';
import { TemplateService } from '../../core/api/post-templates';

@Component({
  selector: 'app-sample-list',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    NzIconModule,
    NzModalModule,
    CommonModule,
  ],
  templateUrl: './post-templates.component.html',
  styleUrl: './post-templates.component.scss',
})
export class PostAddComponent implements OnInit {
  isVisible: boolean = false;
  templateData: any = [];
  url: string = '';

  constructor(
    private templateService: TemplateService,
    private cdr: ChangeDetectorRef,
  ) {}
  ngOnInit(): void {
    this.getAllTemplateData();
  }
  bodyTemplate = {
    Page: 1,
    PageSize: 2,
  };
  totalPage: number = 0;
  getAllTemplateData() {
    this.templateService.getAllTemplate(this.bodyTemplate).subscribe((res) => {
      this.templateData = res.data;
      console.log(this.templateData);
      this.totalPage = res.totalCount;
      this.cdr.detectChanges();
    });
  }
  isWatchMoreText: boolean = true;
  watchmore() {
    this.bodyTemplate.PageSize = 10;
    this.getAllTemplateData();
    if (this.totalPage <= this.bodyTemplate.PageSize) {
      this.isWatchMoreText = false;
    }
  }
  showModal(url: string): void {
    this.url = url;
    this.isVisible = true;
  }
  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}
