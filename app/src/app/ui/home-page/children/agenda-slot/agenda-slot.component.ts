import { Component, Input } from "@angular/core";
import { ICalendarData } from "@mobiscroll/angular-ivy/dist/js/core/shared/calendar-view/calendar-view.types";


@Component({
  selector: 'app-agenda-slot',
  templateUrl: './agenda-slot.component.html'
})
export class AgendaSlotComponent  {
  @Input({required: true}) data!: ICalendarData;

  constructor() {}

}
