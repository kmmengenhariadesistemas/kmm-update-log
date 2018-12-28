import { Injectable } from '@angular/core';
import { VersaoERP } from "./versao-erp";
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BackendService } from './backend.service';
import { Update } from './update';

@Injectable({
  providedIn: 'root'
})
export class UpdateService extends BackendService {

  constructor(private httpClient2: HttpClient) { 
    super(httpClient2);
  }

  getUpdate(atualizacaoUnidadeId: number): Observable<Update> {
    return this.backendCall("M001-ATUALIZACAO", "getAtualizacaoChangelog", {atualizacao_unidade_id: atualizacaoUnidadeId});
  }

  getPatchChangelog(patchId: number): Observable<any> {
    return this.backendCall("M001-ATUALIZACAO", "getPatchChangelog", {patch_id: patchId});
  }
}
