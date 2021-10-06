import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BedroomDetailComponent } from './bedroom-detail.component';

describe('BedroomDetailComponent', () => {
  let component: BedroomDetailComponent;
  let fixture: ComponentFixture<BedroomDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BedroomDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BedroomDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
