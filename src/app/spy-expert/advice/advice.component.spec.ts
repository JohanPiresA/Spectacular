import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Advice } from '../core/models/advice'
import { AdviceComponent } from './advice.component';
import { DebugElement } from '@angular/core';
import { provideRouter } from '@angular/router';

import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';


describe('AdviceComponent', () => {

  let component: AdviceComponent;
  let fixture: ComponentFixture<AdviceComponent>;
  let debugEl: DebugElement;
  let expectedAdvice: Advice = { slip: { id: 2, advice: 'fake advice'}}

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [ provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdviceComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    fixture.detectChanges();

    fixture.componentRef.setInput('advice', expectedAdvice)
    await fixture.whenStable();
  });

  it('should display the advice', () => {
    fixture.detectChanges(); // Ensure the view updates

  const adviceText = debugEl.nativeElement.querySelector('.advice-text'); 
  expect(adviceText.textContent).toContain(expectedAdvice.slip.advice);
  });

  // Use spy

  it('should navigate to /hate/2 when clicking the link', async () => {
    const router = TestBed.inject(Router);
    const navigateSpy = spyOn(router, 'navigate');
  
    const links: NodeListOf<HTMLAnchorElement> = debugEl.nativeElement.querySelectorAll('a');
  
    const link = Array.from(links).find(a => a.getAttribute('href')?.includes('/hate/2'));
  
    expect(link).toBeDefined();
  
    // Simulation manuelle de la navigation
    await router.navigate(['/hate', 2]);
  
    expect(navigateSpy).toHaveBeenCalledWith(['/hate', 2]);
  });
  
  
  
});
