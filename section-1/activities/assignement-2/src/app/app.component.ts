import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    emptyString = true;
    userName = '';
    userName2 = '';

    ngOnInit() {
    }

    isEmptyString(event: Event){
      this.userName = (<HTMLInputElement>event.target).value;

      if(this.userName == '') {
        this.emptyString = true;
      } else {
        this.emptyString = false;
      }
    }

    resetUserName() {
      console.log('teste');
      this.userName = '';
      this.emptyString = true;
    }

}
