import { Pipe, PipeTransform } from "@angular/core";
import { SegmentChangeEventDetail } from "@ionic/angular";
import { MbscEventcalendarView } from "@mobiscroll/angular-ivy";

@Pipe({
  name: 'selectMbscEventalendarView'
})
export class SelectMbscEventalendarViewPipe implements PipeTransform {
  transform = (view: CustomEvent<SegmentChangeEventDetail>|null): MbscEventcalendarView => {
    switch (view?.detail.value) {
      case 'month':
        return ({
          calendar: { type: "month" },
          agenda: { type: "month", scrollable: true },
        } as const);
      case 'week':
        return ({
          schedule: {
            type: "week" ,
            maxEventStack: 1,
            currentTimeIndicator: true,
            startTime: '06:00',
            endTime: '24:00',
            timeLabelStep: 120,
          },
          agenda: { type: "week", scrollable: true },
        } as const);
      case 'list':
        return ({
          agenda: { type: "year", scrollable: true },
        } as const);
      default:
        return ({
          agenda: { type: "month", scrollable: true },
          calendar: { type: "month" },
        } as const);
    }
  }  
}
// transform = (view: CustomEvent<SegmentChangeEventDetail>|null): MbscEventcalendarView => {
//     return view?.detail.value === 'month' 
//       ? ({
//         agenda: { type: "month", scrollable: true },
//         calendar: { type: "month" },
//       } as const)
//       : view?.detail.value === 'week'
//         ? ({
//           agenda: { type: "week", scrollable: true },
//           calendar: { type: "week" },
//         } as const)
//         :({
//           agenda: { type: "year", scrollable: true },
//         } as const);
//   }

