import { Colaborador } from "./Colaborado";
import { Workshop } from "./Workshop";

export class Ata {
    id?: number;
    colaboradores!:Colaborador[];
    workshop!: Workshop[];
}