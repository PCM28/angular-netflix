import { FilmsInterface } from './components/models/films.interface';
import {TopFiveInterface} from './components/models/films.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'netflix-angular';

  public top: TopFiveInterface = {
    title: 'LOS 5 MÁS POPULARES HOY',
    image: [{
      src:"./assets/images/Top10/1-papel.webp",
      alt: "1"
    },
    {
      src:"./assets/images/Top10/2-reina.webp",
      alt: "2"
    },
    {
      src:"./assets/images/Top10/3-titanes.webp",
      alt: "3"
    },
    {
      src:"./assets/images/Top10/4-lostinspace.webp",
      alt: "4"
    },
    {
      src:"./assets/images/Top10/7-blacklist.webp",
      alt: "5"
    },
  ]
  }

  public accionFilms: FilmsInterface = {
    title: 'ACCIÓN',
    image: [{
      src:"./assets/images/Accion/ejercitomuertos.jpg",
      alt: "Ejercito de Muertos"
    },
    {
      src:"./assets/images/Accion/elprotector.webp",
      alt: "El Protector"
    },
    {
      src:"./assets/images/Accion/equalizer2.webp",
      alt: "Equalizer 2"
    },
    {
      src:"./assets/images/Accion/heat.webp",
      alt: "Heat"
    },
    {
      src:"./assets/images/Accion/johnwick2.webp",
      alt: "John Wick 2"
    },
  ]
  }

  public terrorFilms: FilmsInterface = {
    title: 'TERROR',
    image: [{
      src:"./assets/images/Terror/apostol.jpg",
      alt: "Apostol"
    },
    {
      src:"./assets/images/Terror/calleterror.jpg",
      alt: "Call Terror"
    },
    {
      src:"./assets/images/Terror/infiernoagua.webp",
      alt: "Infierno Agua"
    },
    {
      src:"./assets/images/Terror/insidious2.webp",
      alt: "Insidious 2"
    },
    {
      src:"./assets/images/Terror/life.webp",
      alt: "Life"
    },
  ]
  }

  public comediaFilms: FilmsInterface = {
    title: 'COMEDIA',
    image: [{
      src:"./assets/images/Comedia/casi300.webp",
      alt: "Casi 300"
    },
    {
      src:"./assets/images/Comedia/cazafantasmas.webp",
      alt: "Cazafantasmas"
    },
    {
      src:"./assets/images/Comedia/dictador.webp",
      alt: "Dictador"
    },
    {
      src:"./assets/images/Comedia/erasehollywood.webp",
      alt: "Erase Hollywood"
    },
    {
      src:"./assets/images/Comedia/juerga.webp",
      alt: "Juerga"
    },
  ]
  }
}