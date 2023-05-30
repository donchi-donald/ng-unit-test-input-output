import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloComponent } from './hello.component';

describe('HelloComponent', () => {
  let component: HelloComponent;
  let fixture: ComponentFixture<HelloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloComponent ]
    }).compileComponents();

    fixture = TestBed.createComponent(HelloComponent);
    component = fixture.componentInstance;
    component.username = 'john';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display username', () => {
    const messageElement = fixture.nativeElement.querySelector('p');
    expect(messageElement.textContent).toContain('john');
  });

  it('should emit hello event', () => {
    spyOn(component.hello, 'emit');
    component.sayHello('john');
    expect(component.hello.emit).toHaveBeenCalledWith('john');
  });

});
