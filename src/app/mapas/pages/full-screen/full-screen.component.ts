import { environment } from './../../../../environments/environment';
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
    (mapboxgl as any).accessToken = environment.mapboxToken;
    ('pk.eyJ1IjoibHVpc3Ntb250b3lhcCIsImEiOiJja3R1bnJ6MWQyMWtoMzJvOW11OGdza2FyIn0.Q1lBlP3r1C1GPLKJKmwv5g');
    var map = new mapboxgl.Map({
      container: 'mapa',
      style: 'mapbox://styles/mapbox/streets-v11',
    });
  }
}
