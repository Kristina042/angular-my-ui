import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicSwitches } from './basic-switches';

describe('BasicSwitches', () => {
  let component: BasicSwitches;
  let fixture: ComponentFixture<BasicSwitches>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicSwitches]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicSwitches);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
