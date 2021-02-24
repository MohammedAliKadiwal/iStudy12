import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QueComponent } from './que.component';

describe('QueComponent', () => {
  let component: QueComponent;
  let fixture: ComponentFixture<QueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
