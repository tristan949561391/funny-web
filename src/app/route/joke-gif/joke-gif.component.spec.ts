import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeGifComponent } from './joke-gif.component';

describe('JokeGifComponent', () => {
  let component: JokeGifComponent;
  let fixture: ComponentFixture<JokeGifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JokeGifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokeGifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
