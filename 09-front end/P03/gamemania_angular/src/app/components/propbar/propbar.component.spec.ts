import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropbarComponent } from './propbar.component';

describe('PropbarComponent', () => {
  let component: PropbarComponent;
  let fixture: ComponentFixture<PropbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
