import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ClientesService } from '../services/firestore/clientes.service';
import { Cliente } from '../models/cliente.model';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {
  addForm: FormGroup;
  edad: number;
  date: Date;
  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private clientesService: ClientesService) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      date: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      edad: [],
      fechaCreacion: [],
    });
  }

  onSubmit() {
    console.log(this.addForm.value);
    this.addForm.value.fechaNacimiento = moment(this.addForm.value.date).format('DD/MM/YYYY');
    this.addForm.value.edad = this.edad;
    this.addForm.value.fechaCreacion = new Date();
    this.clientesService.crearCliente(this.addForm.value).then(() => {
      this.router.navigate(['listar-cliente']);
    }, (error) => {
      console.error(error);
    });
  }

  onValueChange(event: any): void {
    console.log(event);
    if (event) {
      this.edad = this.calculate_age(event.month, event.day, event.year);
    }
  }

  calculate_age(birth_month: number, birth_day: number, birth_year: number) {
    const today_date = new Date();
    const today_year = today_date.getFullYear();
    const today_month = today_date.getMonth();
    const today_day = today_date.getDate();
    let age = today_year - birth_year;

    if ( today_month < (birth_month - 1)) {
        age--;
    }
    if (((birth_month - 1) === today_month) && (today_day < birth_day)) {
        age--;
    }
    return age < 0 ? 0 : age;
  }
}
