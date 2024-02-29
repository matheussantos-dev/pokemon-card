import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDeckComponent } from './manage-deck.component';

describe('ManageDeckComponent', () => {
  let component: ManageDeckComponent;
  let fixture: ComponentFixture<ManageDeckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageDeckComponent]
    });
    fixture = TestBed.createComponent(ManageDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
