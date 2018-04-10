import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-see-more',
  templateUrl: './see-more.component.html',
  styleUrls: ['./see-more.component.scss']
})
export class SeeMoreComponent implements OnInit {

  @Input()
  text: string;

  @Input()
  charsToDisplayWhenCollapsed = 100;

  @Output()
  isCollapsedEvent: EventEmitter<boolean> = new EventEmitter();

  @Input()
  isCollapsed: boolean = true;

  constructor() {
    this.isCollapsed = true;
  }

  ngOnInit() {
  }

  toggle() {
    this.isCollapsed = !this.isCollapsed;

    this.isCollapsedEvent.emit(this.isCollapsed);
  }

}
