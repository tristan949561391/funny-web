import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JokesTextComponent } from './jokes-text.component';

describe('JokesTextComponent', () => {
  let component: JokesTextComponent;
  let fixture: ComponentFixture<JokesTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JokesTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokesTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
