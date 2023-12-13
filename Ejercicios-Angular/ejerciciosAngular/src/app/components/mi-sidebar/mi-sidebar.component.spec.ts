import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiSidebarComponent } from './mi-sidebar.component';

describe('MiSidebarComponent', () => {
  let component: MiSidebarComponent;
  let fixture: ComponentFixture<MiSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MiSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MiSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
