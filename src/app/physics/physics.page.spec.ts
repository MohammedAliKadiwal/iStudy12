import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PhysicsPage } from './physics.page';

describe('PhysicsPage', () => {
  let component: PhysicsPage;
  let fixture: ComponentFixture<PhysicsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhysicsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PhysicsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
