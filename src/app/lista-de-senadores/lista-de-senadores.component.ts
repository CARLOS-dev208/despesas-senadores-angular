import { SenadoresProps } from './../senadores.service';
import { Component, OnInit } from '@angular/core';
import { SenadoresService } from '../senadores.service';

@Component({
  selector: 'app-lista-de-senadores',
  templateUrl: './lista-de-senadores.component.html',
  styleUrls: ['./lista-de-senadores.component.css'],
})
export class ListaDeSenadoresComponent implements OnInit {
  senadores: SenadoresProps[];
  constructor(private service: SenadoresService) {}

  ngOnInit(): void {
    this.service.getDadosSenadores().subscribe((senadores) => {
      this.senadores = senadores;
    });
  }
}
