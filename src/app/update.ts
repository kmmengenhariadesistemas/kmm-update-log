import { VersaoERP } from './versao-erp';

export class Update {
    versao_atual: {
        versao: string;
        patch_id: number;
        build: number;
    }
    changes: VersaoERP[];
}