import { combineReducers } from 'redux';
import AuthReducer from './auth_reducer';
import EmployeeFormReducer from './employee_form_reducer';

export default combineReducers({
  auth: AuthReducer,
  employeeForm: EmployeeFormReducer
});