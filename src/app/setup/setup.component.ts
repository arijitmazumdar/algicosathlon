import { Component, OnInit } from '@angular/core';
import { Color } from '../color';
import { COLORS } from '../colors';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {
  colors = COLORS;

  constructor() { }

  ngOnInit(): void {
  }

}
