import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface SenadoresProps {
  id: number;
  nomeSenador: string;
}

export interface SenadorProps {
  id: number;
  nomeSenador: string;
  despesas: [
    {
      tipo: number;
      fornec: string;
      ano: number;
      mes: number;
      dia: number;
      valor: number;
    }
  ];
}
const baseUrl = 'http://localhost:3000/';
@Injectable({
  providedIn: 'root',
})
export class SenadoresService {
  constructor(private http: HttpClient) {}

  getDadosSenadores(): Observable<SenadoresProps[]> {
    return this.http.get<SenadoresProps[]>(`${baseUrl}senadores`);
  }

  getSenador(id: number): Observable<SenadorProps> {
    return this.http.get<SenadorProps>(`${baseUrl}despesasSenadores/${id}`);
  }
}
