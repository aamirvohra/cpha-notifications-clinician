import { Component, OnInit } from '@angular/core';
import {AppURLRepo} from '../../utils/app-url-repo';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  private currentYear: number;
  public cphaLogo: string;

  constructor() {
    this.cphaLogo = AppURLRepo.CPHA_LOGO;
    this.currentYear = new Date().getFullYear();
  }

  ngOnInit() {
  }

}
