import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoToStoreComponent } from './go-to-store.component';

describe('GoToStoreComponent', () => {
  let component: GoToStoreComponent;
  let fixture: ComponentFixture<GoToStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoToStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoToStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
