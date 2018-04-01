import { Component, OnInit } from '@angular/core';
import {AppURLRepo} from '../../utils/app-url-repo';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  userIcon: string;

  constructor() {
    this.userIcon = AppURLRepo.USER_ICON;
  }

  ngOnInit() {
  }

}
