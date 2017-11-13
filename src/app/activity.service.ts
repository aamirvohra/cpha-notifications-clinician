import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ActivityService {

  constructor() { }


  public getData() {
    return Observable.of(this.mockData());
  }

  private mockData() {
    return [
      {
        date: '2017-07-07',
        manufacturer: 'Jazz Pharmaceuticals',
        drug: 'ERWINASE',
        messageType: 'Shortage',
        comment: 'Erwinase for Injection - Shortage',
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
