import { Component } from '@angular/core';
import { DogsItem } from './models/dogs-item';
import { DogListService } from './services/dog-list.service';

@Component({
  selector: 'app-dogs-list',
  templateUrl: './dogs-list.component.html',
  styleUrls: ['./dogs-list.component.less']
})
export class DogsListComponent {
  data: DogsItem[];
  constructor(private dogListService: DogListService) {
    this.dogListService.buildDogList();
    this.data = this.dogListService.dogs;
  }

  checkIfIdEven(item: object): boolean {
    return item['id'] % 2 === 0;
  }

  // getBackgroundColor(item: object): string {
  //   if (item['id'] % 2 === 0) {
  //     return 'lightgray';
  //   } else {
  //     return 'white';
  //   }
  // }
}
