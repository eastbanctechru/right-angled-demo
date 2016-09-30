import { ListRequest } from 'right-angled';
export interface AirportsListRequest extends ListRequest {
    airportName?: string;
    type?: string;
    size?: string;
    countryName?: string;
    cityName?: string;
    regionName?: string;
}
