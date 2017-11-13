import { Component, OnInit, ViewChild, EventEmitter, ElementRef } from '@angular/core';
import { AppURLRepo } from '../../utils/app-url-repo';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivityService } from '../activity.service';
import { DaterangepickerConfig, DaterangePickerComponent } from 'ng2-daterangepicker';
import * as moment from 'moment';

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
    this.activityService.getData()
      .map(
        data => {
          for ( let activityData of data) {
            const mmnt = moment(activityData.date, 'YYYY-MM-DD');
            activityData.date = mmnt.format('MMMM DD, YYYY')
          }
          return data;
        }
      ).subscribe(
        data => {
          this.activityData = data;
        }
      );

    this.filterForm.valueChanges.subscribe(
      changes => {
        console.log(changes);
      }
    );
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
    this.filterForm.controls['startDate'].setValue(value.start.format('MMMM DD, YYYY'));
    this.filterForm.controls['endDate'].setValue(value.end.format('MMMM DD, YYYY'));

    this.filterForm.controls['dateRange'].setValue(
      this.filterForm.controls['startDate'].value + ' - ' + this.filterForm.controls['endDate'].value
    );
  }

}
