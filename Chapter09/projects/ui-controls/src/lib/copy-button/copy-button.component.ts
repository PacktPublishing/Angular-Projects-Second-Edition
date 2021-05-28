import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-copy-button',
  templateUrl: './copy-button.component.html',
  styleUrls: ['./copy-button.component.css']
})
export class CopyButtonComponent implements OnInit {

  @Input() data = '';
  @Output() copied = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onCopy() {
    this.copied.next();
  }

}
