import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };


  ngOnInit() {
  }

 // hero = 'Windstorm';

}
