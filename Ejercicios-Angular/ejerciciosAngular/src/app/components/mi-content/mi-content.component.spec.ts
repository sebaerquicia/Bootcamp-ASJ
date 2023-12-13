import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiContentComponent } from './mi-content.component';

describe('MiContentComponent', () => {
  let component: MiContentComponent;
  let fixture: ComponentFixture<MiContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MiContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MiContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
