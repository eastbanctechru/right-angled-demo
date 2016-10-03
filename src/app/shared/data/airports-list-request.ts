import { SortParameter } from './sort-parameter';

export interface AirportsListRequest {
    airportName?: string;
    airportType?: string;
    airportSize?: string;
    sortings: Array<SortParameter>;
}
