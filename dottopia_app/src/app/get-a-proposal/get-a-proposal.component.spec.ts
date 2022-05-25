import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAProposalComponent } from './get-a-proposal.component';

describe('GetAProposalComponent', () => {
  let component: GetAProposalComponent;
  let fixture: ComponentFixture<GetAProposalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAProposalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
