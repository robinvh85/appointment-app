import React, { useContext, useEffect, useState } from 'react';
import { get } from 'lodash';
import { Button, message } from 'antd';

import employeeApi from 'api/employee';
import { StateContext } from 'store/contexts';
import MainLayout from 'components/layouts/MainLayout';
import { getList } from 'store/employee/actions';
import { setLoading } from 'store/common/actions';
import List from './List';
import FormData from './FormData';
import { Actions } from './styles';
import { MESSAGE_DELAY_TIME } from 'constants/app';

const sampleData = [{
  id: 1,
  name: 'Employee 1',
  address: 'Address 1',
  other: 'other 1'
}, {
  id: 2,
  name: 'Employee 2',
  address: 'Address 2',
  other: 'other 2'
}];

enum Mode { List, View, New, Edit }

const EmployeesPage = () => {
  const { state, dispatch } = useContext(StateContext);
  const [employees, setEmployees] = useState<any>([]);
  const [mode, setMode] = useState<Mode>(Mode.List);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const [ createEmployeeRes, createEmployee ] = employeeApi.useCreate();
  const [ updateEmployeeRes, updateEmployee ] = employeeApi.useUpdate();
  const [ deleteEmployeeRes, deleteEmployee ] = employeeApi.useDelete();
  const [ getEmployeesRes, getEmployees ] = employeeApi.useGetAll();

  const handleNew = () => {
    setSelectedEmployee(null);
    setMode(Mode.New);
  }

  const handleDelete = (employee: any) => {
    deleteEmployee(employee);
  }

  const handleEdit = (employee: any) => {
    setSelectedEmployee(employee);
    setMode(Mode.Edit);
  }

  // Handle create
  useEffect(() => {
    if (createEmployeeRes && createEmployeeRes.error) {
      message.error('Can not delete employee', MESSAGE_DELAY_TIME);
    }

    if (createEmployeeRes && createEmployeeRes.data) {
      message.success('Success', MESSAGE_DELAY_TIME);
      getEmployees();
    }
  }, [createEmployeeRes, getEmployees])

  // Handle update
  useEffect(() => {
    if (updateEmployeeRes && updateEmployeeRes.error) {
      message.error('Can not update employee', MESSAGE_DELAY_TIME);
    }

    if (updateEmployeeRes && updateEmployeeRes.data) {
      message.success('Success', MESSAGE_DELAY_TIME);
      getEmployees();
    }
  }, [updateEmployeeRes, getEmployees])

  // Handle delete
  useEffect(() => {
    if (deleteEmployeeRes && deleteEmployeeRes.error) {
      message.error('Can not delete employee', MESSAGE_DELAY_TIME);
    }

    if (deleteEmployeeRes && deleteEmployeeRes.data) {
      message.success('Success', MESSAGE_DELAY_TIME);
      getEmployees();
    }
  }, [deleteEmployeeRes, getEmployees])

  // Get list
  useEffect(() => {
    if (getEmployeesRes && getEmployeesRes.error) {
      // TODO: uncomment when have API
      // message.error('Can not get employees', MESSAGE_DELAY_TIME);
      dispatch(setLoading(false));

      // TODO: remove when have API
      const employees = sampleData;
      dispatch(getList(employees));
    }
    
    if (getEmployeesRes && getEmployeesRes.data) {
      dispatch(setLoading(false));
      const employees = sampleData;
      setEmployees(employees);
    }
  }, [dispatch, getEmployeesRes])

  useEffect(() => {
    dispatch(setLoading(true));
    getEmployees();
  }, [dispatch, getEmployees]);

  return (
    <MainLayout>
      <>
        <Actions>
          <Button type='primary' onClick={handleNew}>New</Button>
        </Actions>
        <List data={employees} onDelete={handleDelete} onEdit={handleEdit} />
        { (mode === Mode.New || mode === Mode.Edit) && <FormData 
          visible={true} 
          values={selectedEmployee}
          onCancel={() => setMode(Mode.List)} 
          onCreate={createEmployee}
          onUpdate={updateEmployee}
        /> }
      </>
    </MainLayout>
  )
}

export default EmployeesPage;