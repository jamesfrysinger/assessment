import { IEmployees } from './userTypes';

export interface IResults {
  results: IEmployees | undefined;
  loading: boolean;
}
