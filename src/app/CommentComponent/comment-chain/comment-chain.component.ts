import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-chain',
  templateUrl: './comment-chain.component.html',
  styleUrls: ['./comment-chain.component.css']
})
export class CommentChainComponent implements OnInit {
@Input() postComment: Array<object> [];
  constructor() { }

  ngOnInit(): void {
  }


}
