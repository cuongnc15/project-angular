import { ClassEditComponent } from '../../features/class-edit/class-edit.component';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ActivatedRoute,
  NavigationEnd,
  RouterLink,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { Router } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

import { AuthService } from '../../core/api/auth.service';
import { CreatePageComponent } from '../../features/class-edit/create-page/create-page.component';
import { ListComponent } from '../../features/truy-van/list/list.component';
import { filter } from 'rxjs';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    ListComponent,
    RouterOutlet,
    CreatePageComponent,
    ClassEditComponent,
    RouterLink,
    NzLayoutModule,
    NzDropDownModule,
    CommonModule,
    RouterModule,
    NzIconModule,
    NzMenuModule,
    NzAvatarModule,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements OnInit {
  currentPageTitle: string = '';
  public href: string[] = [];
  public url: string = 'home';
  constructor(
    private router: Router,
    private Router: ActivatedRoute,
    private authService: AuthService,
    private cdr: ChangeDetectorRef,
  ) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.currentPageTitle = this.getPageTitle(this.router.url);
      });
  }
  getPageTitle(url: string): string {
    switch (url) {
      case '/bao-cao':
        return 'DANH SÁCH BÁO CÁO';
      case '/truy-van':
        return 'DANH SÁCH TRUY VẤN';
      case '/truy-van/tao-moi':
        return 'THÊM MỚI TRUY VẤN';
      case '/nguon-du-lieu':
        return 'DANH SÁCH NGUỒN DỮ LIỆU';
      case '/thung-rac':
        return 'TÀI KHOẢN';
      default:
        return '';
    }
  }

  ngOnInit(): void {
    this.changeColorSidbar();
    this.getUrlText();
    this.loginF();
  }
  loginF() {
    const body = {
      username: 'admin',
      password: 'admin',
      rememberMe: true,
    };
    this.authService.login(body).subscribe((res) => {
      const token = res.id_token;
      localStorage.setItem('token', token);
      this.cdr.detectChanges();
    });
  }
  getUrlText() {
    this.href = this.router.url.split('/');
    if (this.href.includes('sample-list')) {
      this.url = 'sampleList';
    }
    if (this.href.includes('sample-list')) {
      this.url = 'sampleList';
    }
  }
  isCollapsed = false;
  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }
  changeColorSidbar() {
    const menus = document.querySelectorAll('.sidemenu-item');
    menus.forEach((item) => {
      item.addEventListener('click', () => {
        menus.forEach((menu) => {
          menu.classList.remove('selected');
        });
        item.classList.add('selected');
      });
    });
  }
}
