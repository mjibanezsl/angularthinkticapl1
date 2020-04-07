import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../interface/product';

@Component({
  selector: 'app-stateless',
  templateUrl: './stateless.component.html',
  styleUrls: ['./stateless.component.css']
})
export class StatelessComponent implements OnInit {
  @Input() product: Product;
  @Output() cursomatriculado: EventEmitter<Product> = new EventEmitter();

  public matricula: string;
  private disable: boolean;

  constructor() { }

  ngOnInit(): void {
    this.matricula = `Matricularse`;

  }
  matricularse() {
    this.disable = true;
    this.matricula = '¡Matriculado!';
    this.cursomatriculado.emit(this.product);
  }
 
  isdisabled() {
    return !!this.disable;
  }

}