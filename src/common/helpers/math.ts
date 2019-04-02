import moment from 'moment';

export const getAge = (birthdate: string): number => {
	return moment().diff(moment(birthdate, 'DD-MM-YYYY'), "years");
}
