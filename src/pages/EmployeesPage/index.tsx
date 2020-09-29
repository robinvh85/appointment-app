import React, { useContext, useEffect, useState } from 'react';
import { get } from 'lodash';
import { Button, Modal } from 'antd';

import { StateContext } from 'store/contexts';
import MainLayout from 'components/layouts/MainLayout';
import { getList } from 'store/employee/actions';
import { setLoading } from 'store/common/actions';
import List from './List';
import FormData from './FormData';
import { Actions } from './styles';

const sampleData = [{
  key: 1,
  name: 'Employee 1',
  address: 'Address 1'
}, {
  key: 2,
  name: 'Employee 2',
  address: 'Address 2'
}];

enum Mode { List, View, New, Edit }

const EmployeesPage = () => {
  const { state, dispatch } = useContext(StateContext);
  const [employees, setEmployees] = useState([]);
  const [mode, setMode] = useState<Mode>(Mode.List);

  useEffect(() => {
    dispatch(setLoading(false));
    const employees = sampleData;
    dispatch(getList(employees));
  }, [dispatch]);

  useEffect(() => {
    if(state) {
      setEmployees(get(state, ['employee', 'list', 'data']));
    }
  }, [state])

  return (
    <MainLayout>
      <>
        <Actions>
          <Button type='primary' onClick={() => setMode(Mode.New)}>New</Button>
        </Actions>
        <List data={employees} />
        <FormData 
          visible={mode === Mode.New} 
          onCancel={() => setMode(Mode.List)} 
          onSuccess={() => setMode(Mode.List)}
        />
      </>
    </MainLayout>
  )
}

export default EmployeesPage;