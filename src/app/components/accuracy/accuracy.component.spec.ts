import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccuracyComponent } from './accuracy.component';

describe('AccuracyComponent', () => {
  let component: AccuracyComponent;
  let fixture: ComponentFixture<AccuracyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccuracyComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccuracyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
