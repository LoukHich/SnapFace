import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceSnapeComponent } from './face-snape.component';

describe('FaceSnapeComponent', () => {
  let component: FaceSnapeComponent;
  let fixture: ComponentFixture<FaceSnapeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaceSnapeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaceSnapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
