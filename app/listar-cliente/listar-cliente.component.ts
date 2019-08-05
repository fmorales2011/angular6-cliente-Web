import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../services/firestore/clientes.service';
import { Cliente } from '../models/cliente.model';
import { Router } from '@angular/router';
import { mean, std } from 'mathjs';
import * as moment from 'moment';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})
export class ListarClienteComponent implements OnInit {
  clientes: Cliente[];
  edad: number[];
  valueMean: number;
  valueStd: number;

  constructor(private router: Router, private clientesService: ClientesService) { }

  ngOnInit() {
    this.clientesService.listarClientes().subscribe(data => {
      this.clientes = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Cliente;
      });

      this.edad = this.clientes.map(e => {
        return e.edad;
      });
      this.valueMean = Math.round(mean(this.edad) * 100) / 100;
      this.valueStd = Math.round(std(this.edad) * 100) / 100;
    });
  }

  crearCliente(): void {
    this.router.navigate(['crear-cliente']);
  }

  reporteCliente(): void {
    this.router.navigate(['reporte-cliente']);
  }

  calculateFechaProbableMuerte(fechaNacimiento: string, edad: number) {
    const edad_muerte = 65;
    const age = edad_muerte - edad;

    return age > 0 ?  moment(fechaNacimiento, 'DD/MM/YYYY').add(age, 'years').format('DD/MM/YYYY') : '';
  }
}
