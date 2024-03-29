import Mock from 'mockjs'
import homeapi from './mockServeData/home'
import userApi from './mockServeData/user'
import permissionApi from './mockServeData/permission';

Mock.mock('/home/getData',homeapi.getStatisticalData)
Mock.mock(/user\/add/,'post',userApi.createUser)
Mock.mock(/user\/edit/,'post',userApi.updateUser)
Mock.mock(/user\/getUser/,'get',userApi.getUserList)
Mock.mock(/user\/del/,'post',userApi.deleteUser)
Mock.mock(/permission\/getMenu/,'post',permissionApi.getMenu)