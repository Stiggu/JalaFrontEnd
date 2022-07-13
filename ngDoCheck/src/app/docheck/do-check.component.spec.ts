import { ComponentFixture, TestBed } from '@angular/core/testing';

import { doCheckComponent } from './do-check.component';

describe('DocheckComponent', () => {
  let component: doCheckComponent;
  let fixture: ComponentFixture<doCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ doCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(doCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
