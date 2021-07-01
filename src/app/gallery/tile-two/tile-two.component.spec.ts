import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileTwoComponent } from './tile-two.component';

describe('TileTwoComponent', () => {
  let component: TileTwoComponent;
  let fixture: ComponentFixture<TileTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TileTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TileTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
