import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimesComponent } from './animes.component';

describe('AnimesComponent', () => {
  let component: AnimesComponent;
  let fixture: ComponentFixture<AnimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
