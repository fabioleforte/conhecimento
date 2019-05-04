import { Component, OnInit } from '@angular/core';
import { ConhecimentoService } from './../../services/conhecimento.service';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit {
  list = [];

  constructor(private conhecimentoService: ConhecimentoService) { }

  ngOnInit() {

    this.conhecimentoService.getAll().subscribe(resp => {
      this.list = resp;

      console.log(resp);

    });
  }

}
