import { Component } from '@angular/core';
import { MyService } from './my.service';

@Component({
  selector: 'app-dependency-injections',
  templateUrl: './dependency-injections.component.html',
  styleUrls: ['./dependency-injections.component.scss']
})
export class DependencyInjectionsComponent {

  constructor(public myService: MyService) {}

  getData() {
    return this.myService.getData();
  }

}
