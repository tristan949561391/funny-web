import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JokesVideoComponent } from './jokes-video.component';

describe('JokesVideoComponent', () => {
  let component: JokesVideoComponent;
  let fixture: ComponentFixture<JokesVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JokesVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokesVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
