import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftDataComponent } from './draft-data.component';

describe('DraftDataComponent', () => {
  let component: DraftDataComponent;
  let fixture: ComponentFixture<DraftDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DraftDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DraftDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
