import { Component } from '@angular/core';
import { DogsItem } from './models/dogs-item';

@Component({
  selector: 'app-dogs-list',
  templateUrl: './dogs-list.component.html',
  styleUrls: ['./dogs-list.component.less']
})
export class DogsListComponent {
  data: DogsItem[];
  constructor() {
    this.data = [];
    this.data.push(new DogsItem(1, 'York', 'Yorks are very friendly dogs',
    'https://c8.alamy.com/comp/JWWEFR/york-terrier-taking-a-bath-funny-wet-dog-JWWEFR.jpg'));
    this.data.push(new DogsItem(2, 'German Shepard', 'German Shepard are very unfriendly dogs',
    'https://i.ebayimg.com/images/g/lGYAAMXQNo5Taknl/s-l300.jpg'));
    this.data.push(new DogsItem(3, 'Bulldog', 'Bulldog are very lazy dogs',
    'https://i.ytimg.com/vi/ksEliwKxS-Y/hqdefault.jpg'));
    this.data.push(new DogsItem(4, 'Lassie', 'Lessie are very old dogs',
    'https://i.pinimg.com/736x/4d/c2/79/4dc279f7ad7fce4fc9ac65c4ed831bfd.jpg'));
  }
}
