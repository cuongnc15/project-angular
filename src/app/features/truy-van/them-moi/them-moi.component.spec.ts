import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemMoiComponent } from './them-moi.component';

describe('ThemMoiComponent', () => {
  let component: ThemMoiComponent;
  let fixture: ComponentFixture<ThemMoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemMoiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThemMoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
