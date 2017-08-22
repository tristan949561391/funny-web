import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeTextComponent } from './joke-text.component';

describe('JokeTextComponent', () => {
  let component: JokeTextComponent;
  let fixture: ComponentFixture<JokeTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JokeTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokeTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
