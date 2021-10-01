import { Component } from '@angular/core';


interface Propiedad {
  titulo: string;
  descripcion: string;
  lngLat: [number, number];
}


@Component({
  selector: 'app-propiedades',
  templateUrl: './propiedades.component.html',
  styles: [
  ]
})
export class PropiedadesComponent  {

  propiedades: Propiedad[] = [
    {
      titulo: 'Monserrate',
      descripcion: ' Monserrate tiene una altitud de 3152 m y se ubica sobre la cordillera oriental.​',
      lngLat: [ -74.05756924473953, 4.60608369403939]
    },
    {
      titulo: 'Museo Nacional de Colombia',
      descripcion: 'Gran museo con restaurante, tienda y más de 20.000 objetos que datan desde el siglo XVI hasta la actualidad.',
      lngLat: [ -74.06825547111801, 4.616554308263904]
    },
    {
      titulo: 'Centro comercial Plaza Central',
      descripcion: 'Un lugar inmenso hermoso distingue muchas personas de otros paises encuentra de todo un poco, super elegante ',
      lngLat: [ -74.11812315542237, 4.632723586421072 ]
    },
    {
      titulo: 'Hospital Universitario Clínica San Rafael',
      descripcion: 'Cra. 8 ## 17-44 Sur, Bogotá, Cundinamarca',
      lngLat: [ -74.09187432749464, 4.578911313705159 ]
    },
  ]

}
