import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'Spec-tacular!' title`, () => { 
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const title = fixture.nativeElement.querySelector('h1');
    expect(title.textContent).toBe('Spec-tacular!')
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const title = fixture.nativeElement.querySelector('h1');
    expect(title).toBeTruthy();
   });
});
