import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiheaderComponent } from './miheader.component';

describe('MiheaderComponent', () => {
  let component: MiheaderComponent;
  let fixture: ComponentFixture<MiheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MiheaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MiheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
