import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {JokesGifComponent} from './jokes-gif.component';

describe('JokeGifComponent', () => {
  let component: JokesGifComponent;
  let fixture: ComponentFixture<JokesGifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [JokesGifComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokesGifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
