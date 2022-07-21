import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglefaceComponent } from './singleface.component';

describe('SinglefaceComponent', () => {
  let component: SinglefaceComponent;
  let fixture: ComponentFixture<SinglefaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglefaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglefaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
