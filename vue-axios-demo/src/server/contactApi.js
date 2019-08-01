const CONTACT_API = {
  //获取列表
  getContactList: {
    method: 'get',
    url: '/contactList'
  },
  //添加人员 formData
  addContactItembyformData: {
    method: 'post',
    url: '/contact/new/form'
  },
  //添加人员 json
  addContactItembyJson: {
    method: 'post',
    url: '/contact/new/json'
  },
  //编辑人员
  editContactItem: {
    method: 'put',
    url: '/contact/edit'
  },
  //删除人员
  deleteContactItem: {
    method: 'delete',
    url: '/contact'
  },
}

export default CONTACT_API
