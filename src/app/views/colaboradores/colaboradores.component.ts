import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ColaboradoresService } from './colaboradores.service';
import Swal from 'sweetalert2';
import { Colaborador } from 'src/app/interface/Colaborado';

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.css']
})
export class ColaboradoresComponent implements OnInit {
  formulario: FormGroup;

  idColaborador?: string
  listaColaboradores: any;
  editando: boolean = false;

  constructor(private fb: FormBuilder, private colaboresService: ColaboradoresService) {

    this.formulario = this.fb.group({
      nome: ['', Validators.required],
    });

  }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nome: ['', Validators.required],
    });
  }

  buscarColaboradores(id: any): void {
    this.colaboresService.buscarListaColaboradores(id).subscribe(
      {
        next: (data) => {
          this.listaColaboradores = data
        },
        error(err) {
          console.log(err)
        },
      }
    )
  }

  salvarColaborador(): void {
    if (this.formulario.valid) {
      this.colaboresService.salvarColaborador(this.formulario.getRawValue()).subscribe(
        {
          next: () => {
            Swal.fire({
              title: "Sucesso",
              text: "Colaborador criado com sucesso",
              icon: "success"
            });
          },
          error(err) {
            console.log(err)
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


  editarcolaborador(colaborador: Colaborador): void {
    this.formulario.get('nome')?.setValue(colaborador.nome);
    this.idColaborador = colaborador.id;
    this.editando = true;
  }

  cancelarEdicao() {
    this.formulario.get('nome')?.setValue('');
    this.idColaborador = '';
    this.editando = false;
  }

}
