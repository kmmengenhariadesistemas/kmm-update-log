import { Component, OnInit } from '@angular/core';
import { UpdateService } from '../update.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patch-detail',
  templateUrl: './patch-detail.component.html',
  styleUrls: ['./patch-detail.component.css']
})
export class PatchDetailComponent implements OnInit {

  patchId: number;
  changelog: any;

  constructor(private updateService: UpdateService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.patchId = parseInt(params.get('id'));
      this.getPatchChangelog(this.patchId);
    });
    
  }

  getPatchChangelog(patchId: number) {
    this.updateService.getPatchChangelog(patchId).subscribe(a=>{
      this.changelog = a; 
      this.changelog.dependencias.sort((a,b)=>(a.modulo>b.modulo)?1:(a.modulo<b.modulo)?-1:0 );
      // this.changelog.modulos = [];
      // let found = new Set();
      // this.changelog.dependencias.forEach(a=>{
      //   let result = found.has(a.cod_modulo)
      //   if (!result) {
      //     this.changelog.modulos.push({
      //       cod_modulo: a.cod_modulo,
      //       modulo: a.modulo
      //     })
      //     found.add(a.cod_modulo)
      //   }
      // })
      // this.changelog.modulos.sort((a,b)=>(a.modulo>b.modulo)?1:(a.modulo<b.modulo)?-1:0);

      // this.changelog.modulos.forEach(a=>{
      //   this.changelog.modulos
      // });
    })

  }

}
