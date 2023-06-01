import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SentryComponent } from './sentry.component';

describe('SentryComponent', () => {
  let component: SentryComponent;
  let fixture: ComponentFixture<SentryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SentryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
