import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { DogsItem } from '../models/dogs-item';

@Component({
  selector: 'app-dogs-list-element',
  templateUrl: './dogs-list-element.component.html',
  styleUrls: ['./dogs-list-element.component.less']
})
export class DogsListElementComponent implements OnInit {
  @Input() dog: DogsItem;
  @Output() remove: EventEmitter<DogsItem> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onRemoved(dog: DogsItem) {
    this.remove.emit(dog);
  }

}
