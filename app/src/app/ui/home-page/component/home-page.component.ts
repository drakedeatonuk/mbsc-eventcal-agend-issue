import { Component, ViewChild } from "@angular/core";
import { MbscCalendarEventData, MbscEventcalendar, MbscEventClickEvent, MbscEventList } from "@mobiscroll/angular-ivy";
import { DateType } from "@mobiscroll/angular-ivy/dist/js/core/util/datetime";

import { entries } from "../constants/home-page.constants";
import { MbscEntry } from "../types/home-page.types";


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {

  @ViewChild('eventCalEl', { static: true })
  eventCalEl!: MbscEventcalendar;

  entries: MbscEntry[] = entries;

  selectedDate: DateType = new Date('2021-01-01T01:00:00.000Z');
  minDate: DateType = new Date('2021-01-01T01:00:00.000Z');
  maxDate: DateType = new Date('2022-01-01T01:00:00.000Z');

  constructor() {}

  getDayKey(i: number, day: MbscEventList) {
    return day.timestamp;
  }

  getEventKey(i: number, event: MbscCalendarEventData) {
    return event.uid;
  }

  onEventClick(event: MbscEventClickEvent): void {
    console.log("in onEventClick. agenda should navigate to event w/ uuid: ", event.event.id);
    this.eventCalEl.navigateToEvent(event.event);
  }

}