import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-jokes-all',
  templateUrl: './jokes-all.component.html',
  styleUrls: ['./jokes-all.component.css']
})
export class JokesAllComponent implements OnInit {

  private type:string;

  constructor(private  route:Router,private activeRoute:ActivatedRoute) {
    this.type=this.activeRoute.snapshot.paramMap.get('type');




  }
  ngOnInit() {
  }

}
