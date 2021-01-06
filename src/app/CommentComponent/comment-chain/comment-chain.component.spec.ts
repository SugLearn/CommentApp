import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentChainComponent } from './comment-chain.component';

describe('CommentChainComponent', () => {
  let component: CommentChainComponent;
  let fixture: ComponentFixture<CommentChainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentChainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentChainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
