import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title = "BCPNP Calculator -- 2022 Newest Version";

  constructor() { }

  ngOnInit(): void {
  }

}
