import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StagesoflifeComponent } from './stagesoflife.component';

describe('StagesoflifeComponent', () => {
  let component: StagesoflifeComponent;
  let fixture: ComponentFixture<StagesoflifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StagesoflifeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StagesoflifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
