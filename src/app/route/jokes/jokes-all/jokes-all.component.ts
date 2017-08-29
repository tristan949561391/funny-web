import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {JokerService} from "../../../service/joker.service";

@Component({
  moduleId: module.id,
  selector: 'app-jokes-all',
  templateUrl: './jokes-all.component.html',
  styleUrls: ['./jokes-all.component.css']
})
export class JokesAllComponent implements OnInit, OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
  }

  private type: number = null;
  private pagework: { pageNum: number, pageSize: number } = {pageNum: 0, pageSize: 10};

  typeString: string;
  startTime: Date;

  list: Array<any> = new Array();

  constructor(private activeRoute: ActivatedRoute, private jokeService: JokerService) {
    activeRoute.params.subscribe((params) => {
      this.typeString = params['type'];
      if ('text' === this.typeString) this.type = 1;
      else if ('pic' === this.typeString) this.type = 2;
      else if ('gif' === this.typeString) this.type = 3;
      this.startTime = new Date();
    })
  }

  ngOnInit() {
    this.getJokeList();
  }

  getJokeList() {
    this.pagework.pageNum++;
    let filter = {};
    if (this.type) {
      filter = {type: this.type};
    }
    this.jokeService.list(this.pagework, filter, null).subscribe(res => {
      res.forEach(item => {
        this.list.push(item);
      })
    })

  }


}
