import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // isClickedButtonDisplay: boolean = false;
  // eventLogs: string[] = [];
  // counter: number = 0;

  // onClickDisplayButton() {
  //   if(this.isClickedButtonDisplay) {
  //     this.isClickedButtonDisplay = false;
  //     this.eventLogs.push("The secret password isn't being seen");
  //   } else {
  //     this.isClickedButtonDisplay = true;
  //     this.eventLogs.push("The secret password is being seen");
  //   }
  //   this.counter++;
  // }

  showSecret = false;
  log: number [] = [];

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1)
  }

}
