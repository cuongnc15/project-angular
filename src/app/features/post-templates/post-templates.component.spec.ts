import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTemplatesComponent } from './post-templates.component';

describe('PostTemplatesComponent', () => {
  let component: PostTemplatesComponent;
  let fixture: ComponentFixture<PostTemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostTemplatesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
