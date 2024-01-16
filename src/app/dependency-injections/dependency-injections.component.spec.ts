import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependencyInjectionsComponent } from './dependency-injections.component';

describe('DependencyInjectionsComponent', () => {
  let component: DependencyInjectionsComponent;
  let fixture: ComponentFixture<DependencyInjectionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DependencyInjectionsComponent]
    });
    fixture = TestBed.createComponent(DependencyInjectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
