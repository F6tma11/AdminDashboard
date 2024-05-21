import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesAppComponent } from './messages-app.component';

describe('MessagesAppComponent', () => {
  let component: MessagesAppComponent;
  let fixture: ComponentFixture<MessagesAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MessagesAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MessagesAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
