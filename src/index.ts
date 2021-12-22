import { Company } from './Company';
import {User} from './User';
import {CustomGoogleMap} from './CustomGoogleMap';

//const user = new User();
//console.log(user)

//const company = new Company();
//console.log(company);

const user = new User();
const company= new Company();
const customMap = new CustomGoogleMap('map');

//customMap.addUserMarker(user);
//customMap.addCompanyMarker(company);

customMap.addMarker(user);
customMap.addMarker(company);








