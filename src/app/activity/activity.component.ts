import { Component, OnInit } from '@angular/core';
import { AppURLRepo } from '../../utils/app-url-repo';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['activity.component.scss']
})
export class ActivityComponent implements OnInit {

  public searchIcon: string;
  public resetIcon: string;
  public filterForm: FormGroup;

  constructor(private fb: FormBuilder,
              private activityService: ActivityService) {
    this.searchIcon = AppURLRepo.SEARCH_ICON;
    this.resetIcon = AppURLRepo.RESET_ICON;

    this.filterForm = this.fb.group({
      search: [null],
      show: [null],
      dateRange: [null]
    })
  }

  ngOnInit() {
  }

}
