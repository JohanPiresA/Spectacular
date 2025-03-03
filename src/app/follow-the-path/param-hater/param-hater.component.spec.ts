import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParamHaterComponent } from './param-hater.component';
import { provideRouter, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { RouterTestingHarness } from '@angular/router/testing';

describe('ParamHaterComponent', () => {
  let component: ParamHaterComponent;
  let fixture: ComponentFixture<ParamHaterComponent>;
  let router: Router;
  let harness: RouterTestingHarness;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParamHaterComponent], 
      providers: [
        provideRouter([
          { path: 'detail/:id', component: ParamHaterComponent },
        ]),
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of(new Map([['id', '5']])),
            snapshot: { params: { id: '5' } } 
          }
        }
      ]
    }).compileComponents();

    harness = await RouterTestingHarness.create('/detail/5'); 

    fixture = TestBed.createComponent(ParamHaterComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges(); 
  });

  it('should display advice id', async () => {
    harness.detectChanges(); 
    const p: HTMLParagraphElement = harness.fixture.debugElement.query(By.css('p')).nativeElement;
    expect(p.textContent).toBe('My job id to hate the advice: 5');
  });
});
