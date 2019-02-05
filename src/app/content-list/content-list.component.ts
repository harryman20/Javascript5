import { Component,  OnInit } from '@angular/core';
import { Content } from '../content-card/content-card-helper';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
  content1: Content[];
  constructor() {
      this.content1 = new Array();
      this.content1[0] = {
          title: 'Allo',
          contentId: 1337,
          author: 'Me',
          imgUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
          body: 'something something',
          type: 'news',
          tags: ['something', 'somewhere', 'nothing']
      };
      this.content1[1] = {
          title: 'Hallo',
          contentId: 13371,
          author: 'You',
          imgUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
          body: 'something thing',
          type: 'story',
          tags: ['something', 'hdsjkadhsjkass', 'below']
      };
      this.content1[2] = {
          title: 'Hello',
          contentId: 13372,
          author: 'He',
          imgUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
          body: 'something some',
          type: 'news'
      };
      this.content1[3] = {
          title: 'Ballo',
          contentId: 13373,
          author: 'She',
          body: 'thing something',
          type: 'news'
      };
      this.content1[4] = {
          title: 'Yallo',
          contentId: 13374,
          author: 'Be',
          imgUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
          body: 'some something',
          type: 'story',
          tags: ['something', 'shdjksahajkd']
      };
  }
  ngOnInit() {
      console.log(this.content1);
  }

  search(x: string) {
      for (let cell of this.content1)
          if (cell.type === x) {
              console.log(cell);
          }
  }
}
