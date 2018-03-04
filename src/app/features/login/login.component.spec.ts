import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { AuthService } from '../../core/services/auth.service';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthService;
  let el: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [ AuthService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    authService = fixture.debugElement.injector.get(AuthService);
    el = fixture.debugElement.query(By.css('button'));
  });

  it('canLogin returns false when the user is authenticated', () => {
    spyOn(authService, 'isAuthenticated').and.returnValue(true);
    expect(component.canLogin()).toBeFalsy();
    expect(authService.isAuthenticated).toHaveBeenCalled();
  });

  it('canLogin returns true when the user is not authenticated', () => {
    spyOn(authService, 'isAuthenticated').and.returnValue(false);
    expect(component.canLogin()).toBeTruthy();
    expect(authService.isAuthenticated).toHaveBeenCalled();
  });

  it('login button hidden when the user is authenticated', () => {
    expect(el.nativeElement.textContent.trim()).toBe('');
    fixture.detectChanges();
    expect(el.nativeElement.textContent.trim()).toBe('Login');
    spyOn(authService, 'isAuthenticated').and.returnValue(true);
    expect(el.nativeElement.textContent.trim()).toBe('Login');
    fixture.detectChanges();
    expect(el.nativeElement.textContent.trim()).toBe('Logout');
  });

});
