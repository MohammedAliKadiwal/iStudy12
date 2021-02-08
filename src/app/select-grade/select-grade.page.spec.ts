import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectGradePage } from './select-grade.page';

describe('SelectGradePage', () => {
  let component: SelectGradePage;
  let fixture: ComponentFixture<SelectGradePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectGradePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectGradePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
