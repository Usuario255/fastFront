import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WorkshopService } from '../workshop/workshop.service';
import { Workshop } from 'src/app/interface/Workshop';
import { Colaborador } from 'src/app/interface/Colaborado';
import { ColaboradoresService } from '../colaboradores/colaboradores.service';

@Component({
  selector: 'app-ata',
  templateUrl: './ata.component.html',
  styleUrls: ['./ata.component.css']
})
export class AtaComponent implements OnInit {
  formulario!: FormGroup;

  listaWorkshop!: Workshop[];
  listaColaboradoes!: Colaborador[];

  constructor(private fb: FormBuilder, private workshopService: WorkshopService, private colaboradorService: ColaboradoresService) {

  }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      workshop: ['', Validators.required],
      colaborador: [''],
      dataRealizacao: ['', Validators.required]
    });
    this.buscarColaborador();
    this.buscarWorkshop();
  }

  buscarWorkshop(): void {
    this.workshopService.buscarListaWorkshop().subscribe(
      {
        next: (data: Workshop[]) => {
          this.listaWorkshop = data;
        },
        error(err) {
          console.log(err)
        },
      }
    )
  }

  buscarColaborador(): void {
    this.colaboradorService.buscarListaColaboradores().subscribe(
      {
        next: (data: Colaborador[]) => {
          this.listaColaboradoes = data;
        },
        error(err) {
          console.log(err)
        },
      }
    )
  }

  mudarValorData(data: any): void {
    let index = this.listaWorkshop.findIndex((a) => a.id == data.target.value);
    this.formulario.get('dataRealizacao')?.setValue(this.listaWorkshop[index].dataRealizacao.toLocaleString().split("T")[0]);
  }
}
