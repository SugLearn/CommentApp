import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  commentForm: FormGroup;
  submitted: Boolean = false;
  commentVal: string;
  commentInfo: Array<object> = [];
  public id = 0;
  @Output() usercomment = new EventEmitter();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.commentForm = new FormGroup({
      comment: new FormControl()
   });

   this.createForm();
  }

  createForm() {
    this.commentForm = this.formBuilder.group({
      comment: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(){
    this.submitted = true;

    if(this.commentForm.invalid){
      return false;
    }else{
      this.commentInfo.push({
        commentId: this.id ++,
        commentDate: new Date(),
        commentTxt: this.commentForm.controls['comment'].value,
        replyComment: []
      });
      this.usercomment.emit(this.commentInfo);
      console.log('comments' + this.commentInfo);
    }
  }

}
