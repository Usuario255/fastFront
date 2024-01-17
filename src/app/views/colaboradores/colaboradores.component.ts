import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ColaboradoresService } from './colaboradores.service';

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.css']
})
export class ColaboradoresComponent implements OnInit {
  formulario: FormGroup;

  listaColaboradores: any;
  
  constructor(private fb: FormBuilder, private colaboresService: ColaboradoresService ){

    this.formulario = this.fb.group({
      nome: ['', Validators.required],
    });

  }
  
  ngOnInit(): void {
    this.buscarColaboradores()
    this.formulario = this.fb.group({
      nome: ['', Validators.required],
    });
  }

  buscarColaboradores(){
    this.colaboresService.buscarListaColaboradores().subscribe(
      {
        next: (data)=>{
          this.listaColaboradores = data
        },
        error(err) {
          console.log(err)
        },
      }
    )
  }
  salvarColaborador(){
    if (this.formulario.valid) {
      this.colaboresService.salvarColaborador(this.formulario.getRawValue()).subscribe(
        {
          next: ()=>{
            this.buscarColaboradores()
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
  apagarColaborador(id: number){
    this.colaboresService.apagarColaborador(id).subscribe(
      {
        next: ()=>{
          this.buscarColaboradores()
          window.alert("Colaborador apagado com sucesso")
        },
        error(err) {
          console.log(err)
        },
      }
    )
  }

}
