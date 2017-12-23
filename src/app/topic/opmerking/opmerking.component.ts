import { Opmerking } from './opmerking.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-opmerking',
  templateUrl: './opmerking.component.html',
  styleUrls: ['./opmerking.component.css']
})
export class OpmerkingComponent implements OnInit {
  @Input() public opmerking: Opmerking;
  constructor() { }

  ngOnInit() {
  }

}
