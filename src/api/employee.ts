import { useResource } from 'react-request-hook';

const useCreate = () => {
  return useResource((employee) => ({
    url: `/employees`,
    method: 'post',
    data: employee
  }))
}

const useUpdate = () => {
  return useResource((employee) => ({
    url: `/employees/${employee.id}`,
    method: 'put',
    data: employee
  }))
}

const useDelete = () => {
  return useResource((employee) => ({
    url: `/employees/${employee.id}`,
    method: 'delete'
  }))
}

const useGetAll = () => {
  return useResource(() => ({
    url: `/employees`,
    method: 'get'
  }))
}

export default {
  useCreate,
  useUpdate,
  useDelete,
  useGetAll
}