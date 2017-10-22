import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AppURLRepo } from '../../utils/app-url-repo';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public clinicianLogo: string;

  public profileIcon: string;
  public dropdownIcon: string;
  public settingIcon: string;
  public signoutIcon: string;
  public loggedInUser: boolean;

  constructor( //private modalService: ModalService,
              private router: Router) {
    this.clinicianLogo = AppURLRepo.CLINICIAN_LOGO;
    this.profileIcon = AppURLRepo.PROFILE_ICON;
    this.dropdownIcon = AppURLRepo.DROPDOWN_ICON;
    this.settingIcon = AppURLRepo.SETTINGS_ICON;
    this.signoutIcon = AppURLRepo.SIGNOUT_ICON;
  }

  ngOnInit() {
    this.router.events.filter(
      event => event instanceof NavigationEnd).subscribe(
      (event: NavigationEnd) => {
        if (event.url !== '/') {
          this.loggedInUser = true;
        }
        else {
          this.loggedInUser = false;
        }
      }
    )

  }

  // displaySignInForm() {
  //   this.modalService.displaySignInForm();
  // }
  //
  // displaySignUpForm() {
  //   this.modalService.displaySignUpForm();
  // }
  //
  // processLogout() {
  //
  // }

}
