import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.scss']
})
export class ResultPageComponent implements OnInit {

  constructor() { }
  @Input() point: number = 0;
  @Output() refresh = new EventEmitter<number>();

  ngOnInit(): void {
  }

  goBackToFrom() {
    this.refresh.emit(-1);
  }

}
