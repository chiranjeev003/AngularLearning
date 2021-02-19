import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BakriComponent } from './bakri.component';

describe('BakriComponent', () => {
  let component: BakriComponent;
  let fixture: ComponentFixture<BakriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BakriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BakriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
