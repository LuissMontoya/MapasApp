
import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-full-screen',
  templateUrl: './full-screen.component.html',
  styles: [
    `
    #mapa{
      height: 100%;
      width: 100%;
    }
    `,
  ],
})
export class FullScreenComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {


    ('pk.eyJ1IjoibHVpc3Ntb250b3lhcCIsImEiOiJja3R1bnJ6MWQyMWtoMzJvOW11OGdza2FyIn0.Q1lBlP3r1C1GPLKJKmwv5g');
    var map = new mapboxgl.Map({
      container: 'mapa',
      style: 'mapbox://styles/mapbox/streets-v11',
      center:[ -76.04576435744507,1.9919643233842774],
      zoom:16
    });
  }
}
