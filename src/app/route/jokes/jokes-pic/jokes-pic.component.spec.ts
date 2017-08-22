import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JokesPicComponent } from './jokes-pic.component';

describe('JokesPicComponent', () => {
  let component: JokesPicComponent;
  let fixture: ComponentFixture<JokesPicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JokesPicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokesPicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
