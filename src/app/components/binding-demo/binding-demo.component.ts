import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'pdm-binding-demo',
  template: `
    <div><input [(ngModel)]="textToBind"></div>
  `,
  styleUrls: ['./binding-demo.component.scss']
})
export class BindingDemoComponent implements OnInit {
  @Input() textToBind: string;

  constructor() { }

  ngOnInit() {
  }

}
