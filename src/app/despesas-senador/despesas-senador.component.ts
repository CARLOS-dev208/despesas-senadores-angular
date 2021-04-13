import { SenadorProps } from './../senadores.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SenadoresService } from '../senadores.service';

interface DespesasProps {
  tipo: number;
  fornec: string;
  ano: number;
  mes: number;
  dia: number;
  valor: number;
}
@Component({
  selector: 'app-despesas-senador',
  templateUrl: './despesas-senador.component.html',
  styleUrls: ['./despesas-senador.component.css'],
})
export class DespesasSenadorComponent implements OnInit {
  id: number;
  senador: SenadorProps;
  despesas: DespesasProps[];
  total: number;
  constructor(
    private service: SenadoresService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.carregar();
  }

  carregar() {
    this.router.paramMap.subscribe((param) => {
      this.id = parseInt(param.get('id'));
      this.service.getSenador(this.id).subscribe((senador) => {
        this.senador = senador;
        this.despesas = this.senador.despesas;
        this.total = this.despesas?.reduce((el1, el2) => el1 + el2.valor, 0);
      });
    });
  }

  calcularCampos(index: number) {
    return this.despesas
      ?.filter((despesa) => despesa.tipo == index)
      .reduce((el1, el2) => el1 + el2.valor, 0);
  }
}
