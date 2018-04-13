import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbnailsTableComponent } from './thumbnails-table.component';

describe('ThumbnailsTableComponent', () => {
  let component: ThumbnailsTableComponent;
  let fixture: ComponentFixture<ThumbnailsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThumbnailsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThumbnailsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
