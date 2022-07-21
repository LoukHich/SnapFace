import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceSnapeListComponent } from './face-snape-list.component';

describe('FaceSnapeListComponent', () => {
  let component: FaceSnapeListComponent;
  let fixture: ComponentFixture<FaceSnapeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaceSnapeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaceSnapeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
