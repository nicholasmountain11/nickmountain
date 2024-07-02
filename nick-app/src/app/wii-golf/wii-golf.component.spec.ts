import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WiiGolfComponent } from './wii-golf.component';

describe('WiiGolfComponent', () => {
  let component: WiiGolfComponent;
  let fixture: ComponentFixture<WiiGolfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WiiGolfComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WiiGolfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
