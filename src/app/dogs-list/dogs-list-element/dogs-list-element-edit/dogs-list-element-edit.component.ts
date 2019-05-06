import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DogsItem } from '../../models/dogs-item';

@Component({
  selector: 'app-dogs-list-element-edit',
  templateUrl: './dogs-list-element-edit.component.html',
  styleUrls: ['./dogs-list-element-edit.component.less']
})
export class DogsListElementEditComponent implements OnInit {
  @Input() dog: DogsItem;
  @Output() remove: EventEmitter<DogsItem> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onRemovedClicked() {
    this.remove.emit(this.dog);
  }

}
