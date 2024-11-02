import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationDataViewComponent } from './location-data-view.component';

describe('LocationDataViewComponent', () => {
  let component: LocationDataViewComponent;
  let fixture: ComponentFixture<LocationDataViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationDataViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LocationDataViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
