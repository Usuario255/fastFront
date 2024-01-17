import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WorkshopService } from './workshop.service';

@Component({
  selector: 'app-workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.css']
})
export class WorkshopComponent implements OnInit {
  formulario!: FormGroup;

  listaWorkshop: any;
  
  constructor(private fb: FormBuilder, private workshopService:WorkshopService ){

  }
  
  ngOnInit(): void {
    this.buscarWorkshop()
    this.formulario = this.fb.group({
      nome: ['', Validators.required],
      dataRealizacao: ['', Validators.required],
      descricao: ['', Validators.required],
    });
  }

  buscarWorkshop(){
    this.workshopService.buscarListaWorkshop().subscribe(
      {
        next: (data)=>{
          this.listaWorkshop = data
        },
        error(err) {
          console.log(err)
        },
      }
    )
  }

  salvarWorkshop(){
    if (this.formulario.valid) {
      this.workshopService.salvarWorkshop(this.formulario.getRawValue()).subscribe(
        {
          next: ()=>{
            this.buscarWorkshop();
            window.alert("Workshop salvo com sucesso ");
            
          },
          error(err) {
            console.log(err);
          },
        }
      )
    }else{
      window.alert("Preencha todos os campos ");
    }
  }

  apagarWorkshop(id: number){
    this.workshopService.apagarWorkshop(id).subscribe(
      {
        next: ()=>{
          this.buscarWorkshop();
          window.alert("Colaborador apagado com sucesso");
        },
        error(err) {
          console.log(err);
        },
      }
    )
  }

  filtroDeData(data:string): string{
    let dia = data.split('T');
    return dia[0];
  }
}
