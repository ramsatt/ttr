import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-small-step-block',
  templateUrl: './small-step-block.component.html',
  styleUrls: ['./small-step-block.component.css']
})
export class SmallStepBlockComponent implements OnInit {

  @Input() class;
  @Input() icon;
  @Input() title;
  @Input() count;

  constructor() { }

  ngOnInit() {
  }

}
