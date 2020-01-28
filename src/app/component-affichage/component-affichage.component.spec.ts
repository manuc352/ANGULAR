import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentAffichageComponent } from './component-affichage.component';

describe('ComponentAffichageComponent', () => {
  let component: ComponentAffichageComponent;
  let fixture: ComponentFixture<ComponentAffichageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentAffichageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentAffichageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
