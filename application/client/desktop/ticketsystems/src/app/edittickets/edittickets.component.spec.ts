import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditticketsComponent } from './edittickets.component';

describe('EditticketsComponent', () => {
  let component: EditticketsComponent;
  let fixture: ComponentFixture<EditticketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditticketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditticketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});