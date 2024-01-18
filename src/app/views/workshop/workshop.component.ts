import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WorkshopService } from './workshop.service';
import Swal from 'sweetalert2';
import { Workshop } from 'src/app/interface/Workshop';

@Component({
  selector: 'app-workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.css']
})
export class WorkshopComponent implements OnInit {
  formulario!: FormGroup;
  listaWorkshop: Workshop[] = [];
  workshop!: Workshop;
  dataFormatada:any 
  idWorkshop?: string;
  editando:boolean = false;

  constructor(private fb: FormBuilder, private workshopService: WorkshopService) {

  }

  ngOnInit(): void {
 
    this.formulario = this.fb.group({
      nome: ['', Validators.required],
      dataRealizacao: ['', Validators.required],
      descricao: ['', Validators.required],
    });
  }

  salvarWorkshop() {
    if (this.formulario.valid) {
      
      this.workshopService.salvarWorkshop(this.formulario.getRawValue()).subscribe(
        {
          next: () => {

            Swal.fire({
              title: "Sucesso",
              text: "Workshop criado com sucesso",
              icon: "success"
            });

          },
          error(err) {
            console.log(err);
          },
        }
      )
    } else {
      Swal.fire({
        title: "Aviso",
        text: "Preencha todos os campos",
        icon: "warning"
      });
    }
  }
  filtroDeData(data: Date | string): string {
    let dia = data.toString().split('T');
    return dia[0];
  }
}
