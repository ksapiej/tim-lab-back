import {Component} from '@angular/core';
import {Service} from './Service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: Array<any>;
  average: number;
  amount: number;
  isList: boolean;

  constructor(private serv: Service) {
    this.isList = false;
  }

  generateList(event) {
    this.serv.getList(this.amount).subscribe(data => {
      this.items = data;
    });
    if (this.amount == 0) {
      this.isList = false;
    } else {
      this.isList = true;
    }
  }

  Average(event) {
    this.serv.getAverage().subscribe(data => {
      this.average = data;
    });
  }
}
