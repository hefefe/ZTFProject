import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterDataViewComponent } from './character-data-view.component';

describe('CharacterDataViewComponent', () => {
  let component: CharacterDataViewComponent;
  let fixture: ComponentFixture<CharacterDataViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterDataViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharacterDataViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
