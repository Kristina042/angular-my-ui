import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicButton } from './basicButton';

describe('Button', () => {
  let component: BasicButton;
  let fixture: ComponentFixture<BasicButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
