import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TheSelection } from 'src/app/models/formModel.model';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  @Input() data: TheSelection = new TheSelection("", 0);
  @Output() check = new EventEmitter<TheSelection>();
  checked: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  change() {
    this.checked = !this.checked;
    if (this.checked)
      this.check.emit(new TheSelection(this.data.name, this.data.point));
    else
      this.check.emit(new TheSelection(this.data.name, -this.data.point));
  }

}
