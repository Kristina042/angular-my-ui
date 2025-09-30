import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsSection } from './buttons-section';

describe('ButtonsSection', () => {
  let component: ButtonsSection;
  let fixture: ComponentFixture<ButtonsSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonsSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonsSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
