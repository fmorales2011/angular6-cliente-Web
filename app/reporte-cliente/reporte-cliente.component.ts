import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesService } from '../services/firestore/clientes.service';
import { Cliente } from '../models/cliente.model';

@Component({
  selector: 'app-reporte-cliente',
  templateUrl: './reporte-cliente.component.html',
  styleUrls: ['./reporte-cliente.component.css']
})
export class ReporteClienteComponent implements OnInit {
  clientes: Cliente[];
  totalCliente: number;
  totalClienteNuevos: number;
  constructor(private router: Router, private clientesService: ClientesService) { }

  ngOnInit() {
    this.clientesService.listarClientes().subscribe(data => {
      this.clientes = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Cliente;
      });

      this.totalCliente = this.clientes.length;
      this.totalClienteNuevos = this.clientes.length;

    });
  }

}
