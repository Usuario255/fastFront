import { Colaborador } from "./Colaborado";
import { Workshop } from "./Workshop";

export class Ata {
    id?: number;
    Colaboradores!:Colaborador[];
    Workshop!: Workshop;
}