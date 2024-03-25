import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment';
import { NzMessageModule, NzMessageService } from 'ng-zorro-antd/message';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NzMessageModule,
    HttpClientModule,
    HttpClientJsonpModule,
    NzDropDownModule,
    NzToolTipModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'project-test-1';
  env: string = environment.name;
  createBasicMessage(): void {
    this.message.success(
      'This is a prompt message for success, and it will disappear in 10 seconds',
      {
        nzDuration: 10000,
      }
    );
  }

  constructor(private message: NzMessageService) {}
}
