import { Component, OnInit } from '@angular/core';
import { VersaoERP } from "../versao-erp";
import { UpdateService } from "../update.service";
import { Update } from '../update';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-list',
  templateUrl: './update-list.component.html',
  styleUrls: ['./update-list.component.css']
})
export class UpdateListComponent implements OnInit {

  atualizacaoUnidadeId: number;
  update: Update;

  constructor(private updateService: UpdateService, private route: ActivatedRoute) { }

  getUpdate(atualizacaoUnidadeId: number): void {
    this.updateService.getUpdate(atualizacaoUnidadeId).subscribe(versoes => {
      this.update = versoes;
    });
  }

  ngOnInit() {
    this.atualizacaoUnidadeId = +this.route.snapshot.paramMap.get('id');
    this.getUpdate(this.atualizacaoUnidadeId);
  }

}
