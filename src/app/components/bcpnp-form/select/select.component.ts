import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TheSelection } from 'src/app/models/formModel.model';


@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input() title: string = '';
  @Input() data: TheSelection[] = [];
  @Output() pointsEvent = new EventEmitter<TheSelection>();
  point: number = 1;

  constructor() {
  }

  select() {
    this.pointsEvent.emit(new TheSelection(this.title, this.point));
  }

  ngOnInit(): void {
  }

}
