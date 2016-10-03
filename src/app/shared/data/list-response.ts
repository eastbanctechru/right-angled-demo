import { Airport } from './airport';

export interface ListResponse {
    items: Airport[];
    totalCount: number;
    loadedCount?: number;
}
