import { HttpClientModule } from '@angular/common/http';
import { TestBed, async } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let router: Router;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, HttpClientModule, RouterTestingModule.withRoutes([]),
      ],
      declarations: [
        AppComponent
      ],
      providers: [

      ]
    }).compileComponents();
    router = TestBed.inject(Router);
    router.initialNavigation();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('Navigate to services', () => {
    const spy = spyOn(router, 'navigate');
    router.navigate(['/services']);
    expect(spy).toHaveBeenCalledWith(['/services']);
  });

});
