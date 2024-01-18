import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Workshop } from 'src/app/interface/Workshop';
import { Colaborador } from 'src/app/interface/Colaborado';
import { Ata } from 'src/app/interface/Ata';
import { AtaService } from './ata.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ata',
  templateUrl: './ata.component.html',
  styleUrls: ['./ata.component.css']
})
export class AtaComponent implements OnInit {
  formulario!: FormGroup;
  ata!: Ata;
  listaWorkshop!: Workshop[];
  listaColaboradoes: Colaborador[] = [];

  constructor(private fb: FormBuilder, private ataService: AtaService) {

  }
  


  ngOnInit(): void {
    this.formulario = this.fb.group({
      workshop: ['', Validators.required],
      colaborador: [''],
      dataRealizacao: ['', Validators.required],
      descricao: ['', Validators.required]
    });
  }
  salvarAta(): void {
    this.ata = {
      Colaboradores: this.listaColaboradoes,
      Workshop: {
        dataRealizacao: this.formulario.get('dataRealizacao')?.value,
        descricao: this.formulario.get('descricao')?.value,
        nome: this.formulario.get('workshop')?.value
      }
    }
    this.ataService.salvarAta(this.ata).subscribe(
      {
        next: (data: any) => {
          Swal.fire({
            title: "Sucesso",
            text: "Ata criada com sucesso",
            icon: "success"
          });
        }
      }
    )
  }
  adcionarColabordor(): void {
    let nome = this.formulario.get('colaborador')?.value
    if (nome.length > 0) {
      Swal.fire({
        title: "Sucesso",
        text: "Colaborador adcionado com sucesso com sucesso",
        icon: "success"
      });
      this.listaColaboradoes.push({
        nome: this.formulario.get('colaborador')?.value
      })
    }else{
      Swal.fire({
        title: "Aviso",
        text: "Preencha o campo colaborador",
        icon: "warning"
      });
    }
  }
  reoverColaborador(i:any){
    this.listaColaboradoes.splice(i, 1);
  }
}
