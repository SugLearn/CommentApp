import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CommentsApp';
  comments: string;

  receiveComment(event){
    this.comments = event;
    console.log('Parent component value' + this.comments);

  }
}
