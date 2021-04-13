import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaDeSenadoresComponent } from './lista-de-senadores/lista-de-senadores.component';
import { DespesasSenadorComponent } from './despesas-senador/despesas-senador.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { registerLocaleData } from '@angular/common';

import localePt from '@angular/common/locales/pt';
import { TransformaTipoPipe } from './transforma-tipo.pipe';
registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    ListaDeSenadoresComponent,
    DespesasSenadorComponent,
    TransformaTipoPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    MatListModule,
    MatIconModule,
    MatTableModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
