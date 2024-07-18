import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreSamplesComponent } from './more-samples.component';

describe('MoreSamplesComponent', () => {
  let component: MoreSamplesComponent;
  let fixture: ComponentFixture<MoreSamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoreSamplesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoreSamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
