import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { switchMap } from 'rxjs/operators';

import { Conhecimentos } from './../../models/conhecimento';
import { ConhecimentoService } from './../../services/conhecimento.service';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit {
  list: Conhecimentos[];
  searchForm: FormGroup;
  searchControl: FormControl;

  valid: boolean;

  constructor(
    private conhecimentoService: ConhecimentoService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {

    this.valid = false;
    this.searchControl = this.fb.control('');

    this.searchForm = this.fb.group({
      searchControl: this.searchControl
    });

    // this.getService();
    this.test();


  }

  getService() {
    // this.conhecimentoService.getAll().subscribe(x => this.list = x);

    this.searchControl.valueChanges.pipe(
      switchMap(searchTerm => {

        return this.conhecimentoService.getAll(searchTerm);

      })
    ).subscribe(x => this.list = x);

  }

  test() {
    if (this.valid === false) {
      this.getService();
      this.valid = true;
    } else {
      this.valid = false;
    }
  }
}
