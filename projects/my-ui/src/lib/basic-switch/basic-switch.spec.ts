import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicSwitch } from './basic-switch';

describe('BasicSwitch', () => {
  let component: BasicSwitch;
  let fixture: ComponentFixture<BasicSwitch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicSwitch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicSwitch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
