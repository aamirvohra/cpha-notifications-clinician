import { Component, OnInit, ViewChild, EventEmitter, ElementRef, SimpleChange } from '@angular/core';
import { AppURLRepo } from '../../utils/app-url-repo';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivityService } from '../activity.service';
import { DaterangepickerConfig, DaterangePickerComponent } from 'ng2-daterangepicker';
import * as moment from 'moment';
import { ActivityQuery } from '../../activity-query';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['activity.component.scss']
})
export class ActivityComponent implements OnInit {

  public searchIcon: string;
  public resetIcon: string;
  public filterForm: FormGroup;

  @ViewChild(DaterangePickerComponent)
  private picker: DaterangePickerComponent;

  @ViewChild('calendar')
  public calendar: ElementRef;

  public activityData: Array<any>;
  private query: ActivityQuery;

  public noResultsFound: string = 'No results found. Please Search again';
  public isResultsEmpty: boolean;

  constructor(private fb: FormBuilder,
              private activityService: ActivityService,
              private dateFilterConfig: DaterangepickerConfig) {
    this.searchIcon = AppURLRepo.SEARCH_ICON;
    this.resetIcon = AppURLRepo.RESET_ICON;

    this.filterForm = this.fb.group({
      search: [null],
      show: [null],
      startDate: [null],
      endDate: [null],
      dateRange: [null],
    });

    this.query = new ActivityQuery();

    this.dateFilterConfig.settings = {
      ranges : {
        'Today': [moment(), moment()],
        'Yesterday': [moment().subtract(1, 'days'), moment()],
        'Last 7 Days': [moment().subtract(7, 'days'), moment()],
        'Last 30 Days': [moment().subtract(30, 'days'), moment()],
        'This Month': [moment().startOf('month'), moment()],
        'Last Month': [moment().startOf('month').subtract(1, 'month'), moment().endOf('month').subtract(1, 'month')],
      },
      autoUpdateInput: false,
    }
  }

  ngOnInit() {
    this.getActivityData();

    // this.filterForm.controls['search'].valueChanges.subscribe(
    //   (search: string) => {
    //     this.query.search = search;
    //     this.getActivityData();
    //   }
    // );

    this.filterForm.controls['show'].valueChanges.subscribe(
      (showManufacturers: string) => {
        this.query.manufacturer = showManufacturers;
        this.getActivityData();
      }
    );

    this.filterForm.controls['startDate'].valueChanges.subscribe(
      (startDate: any) => {
        this.query.startDate = startDate;

        this.query.endDate = this.filterForm.controls['endDate'].value;
        this.getActivityData();
      }
    );

    this.filterForm.controls['endDate'].valueChanges.subscribe(
      (endDate: any) => {
        this.query.endDate = endDate;
        // Since its a day range we dont need to getActivityData on
        // change for both end date and start date
      }
    );
  }

  public filterBySearchKeyword() {
    this.query.search = this.filterForm.controls['search'].value;
    this.getActivityData();
  }

  displayCalendar() {
    if(!this.picker.datePicker.isShowing) {
      this.calendar.nativeElement.focus();
    }
    else {
      this.calendar.nativeElement.blur();
    }
  }

  public selectedDate(value: any, datepicker?: any) {
    // set values from here to the form
    this.filterForm.controls['endDate'].setValue(value.end);
    this.filterForm.controls['startDate'].setValue(value.start);

    this.filterForm.controls['dateRange'].setValue(
      value.start.format('MMMM DD, YYYY') + ' - ' + value.end.format('MMMM DD, YYYY')
    );
  }

  public getActivityData() {
    this.activityService.getData(this.query)
      .subscribe(
        data => {
          if(data.length) {
            this.isResultsEmpty = false;
            this.activityData = data;
          }
          else {
            this.isResultsEmpty = true;
          }
        }
      )
  }

  public resetFilters() {
    this.filterForm.reset();
    this.query = new ActivityQuery();
    this.getActivityData();
  }

}
