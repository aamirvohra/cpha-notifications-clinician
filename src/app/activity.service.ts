import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { ActivityQuery } from '../activity-query';

@Injectable()
export class ActivityService {

  constructor() { }


  public getData(query: ActivityQuery) {
    return Observable.of(this.mockData())
      .map(
        data => {
          data = this.filterData(data, query);
          for (const activityData of data) {
            const mmnt = moment(activityData.date, 'YYYY-MM-DD');
            activityData.date = mmnt.format('MMMM DD, YYYY')
          }
          return data;
        }
      );
  }

  private filterData(data, query) {
    if (query.search) {
      data = this.filterByKeyword(data, query.search);
    }

    if (query.startDate && query.endDate) {
      data = this.filterByDateRange(data, query.startDate, query.endDate);
    }

    return data;
  }

  private filterByKeyword(data, keyword) {
    const filteredData = [];
    for (const activityData of data) {
      for (const obj in activityData) {
        if (activityData[obj].toLowerCase().indexOf(keyword.toLowerCase()) !== -1) {
            filteredData.push(activityData);
            break;
        }
      }
    }

    return filteredData;
  }

  private filterByDateRange(data, startDate, endDate) {
    const filteredData = [];
    for (const activityData of data) {
      const mmnt = moment(activityData.date, 'YYYY-MM-DD');
      const isBtwn = mmnt.isBetween(startDate, endDate);

      if (isBtwn) {
        filteredData.push(activityData);
      }
    }

    return filteredData;
  }

  private mockData() {
    return [
      {
        date: '2017-07-07',
        manufacturer: 'Jazz Pharmaceuticals',
        drug: 'ERWINASE',
        messageType: 'Shortage',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mollis suscipit lobortis. Aliquam a sem quis arcu finibus vestibulum eget sed leo. In eget lorem non magna dignissim consectetur. Mauris ipsum velit, tristique aliquam est id, tempor vestibulum ante. Sed in rhoncus ipsum, sed consectetur neque. Praesent convallis eget mi et ornare. Nulla fermentum aliquet bibendum. Nulla accumsan quam ut mauris pharetra, in posuere dolor efficitur. Etiam iaculis nulla ut ipsum maximus, nec convallis enim semper. Etiam id faucibus mauris, quis tempus ipsum. ' +
        'Duis ligula metus, elementum eget neque dictum, posuere elementum libero. Phasellus rhoncus erat quis neque ultricies scelerisque.',
      },
      {
        date: '2017-08-07',
        manufacturer: 'Bayer',
        drug: 'RestoraLAX',
        messageType: 'Recall',
        comment: 'Bayer expand recall of RestoreLAX, sold nationwide, due to potential choking hazard',
      },
      {
        date: '2017-07-25',
        manufacturer: 'Novo Nordisk',
        drug: 'NovoPen Echo or NovoPen 5',
        messageType: 'Recall',
        comment: 'Health Canada is advising Canadians that Novo Nordisk A/S has updated a voluntary recall of insulin cartridge holders',
      },
      {
        date: '2017-10-01',
        manufacturer: 'Taro Pharmaceuticals',
        drug: 'Taro-Capecitabine',
        messageType: 'New Product',
        comment: 'Taro-Capecitabine is now available in Canada',
      },
      {
        date: '2017-10-31',
        manufacturer: 'Jannsen',
        drug: 'Imbruvica',
        messageType: 'New Indication',
        comment: 'New indication: For the treatment of patients with steroid dependent or refractory chronic graft versus host disease',
      },
      {
        date: '2017-01-01',
        manufacturer: 'Sunovion',
        drug: 'Cubicin',
        messageType: 'Formulary Addition',
        comment: 'Cubicin will be available next month in Ontario',
      },
      {
        date: '2017-02-01',
        manufacturer: 'Sunovion',
        drug: 'Cubicin',
        messageType: 'Formulary Addition',
        comment: 'Cubicin is now available on Ontario Formularies',
      },
    ]
  }

}
