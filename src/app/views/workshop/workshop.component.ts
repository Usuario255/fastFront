import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WorkshopService } from './workshop.service';

@Component({
  selector: 'app-workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.css']
})
export class WorkshopComponent {
  formulario: FormGroup;

  listaWorkshop: any;
  
  constructor(private fb: FormBuilder, private workshopService:WorkshopService ){

    this.formulario = this.fb.group({
      nome: ['', Validators.required],
    });

  }
  
  ngOnInit(): void {
    this.buscarWorkshop()
    this.formulario = this.fb.group({
      nome: ['', Validators.required],
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
            this.buscarWorkshop()
          },
          error(err) {
            console.log(err)
          },
        }
      )
    }else{
      window.alert("Colaborador salvo com sucesso")
    }
  }
  apagarWorkshop(id: number){
    this.workshopService.apagarWorkshop(id).subscribe(
      {
        next: ()=>{
          this.buscarWorkshop()
          window.alert("Colaborador apagado com sucesso")
        },
        error(err) {
          console.log(err)
        },
      }
    )
  }

}
