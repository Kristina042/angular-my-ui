import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyUi } from './my-ui';

describe('MyUi', () => {
  let component: MyUi;
  let fixture: ComponentFixture<MyUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyUi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyUi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
