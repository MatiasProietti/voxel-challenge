import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShowHomePage } from './show-home.page';

describe('ShowHomePage', () => {
  let component: ShowHomePage;
  let fixture: ComponentFixture<ShowHomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowHomePage],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
