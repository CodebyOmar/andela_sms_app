import api from "../../api/studentAPI"
import helpers from "../../resources/helpers"

let state = {
  students:[],
  delete_status:"",
  delete_error:{},
  create_error: {},
  create_status: undefined
}

const getters = {
  allStudents : state => state.students,
  create_status : state => state.create_status
}

const mutations = {
  addStudent: async (state,student) => {
    const res = () => {
      return new Promise((resolve, reject) => {
        state.create_status = "Pending"
        api.create(student)
        .then((res) => { resolve(res) })
        .catch((err) => { reject(err) })
      })
      .then((response) => { console.log({"response":response}); state.create_status=response.data.status})
      .catch((err) => { state.create_error.error = err.message })
    }

    return await res()
  },

  getStudents: async (state) => {
    const res = () => {
      state.students = new Array()
      return new Promise((resolve, reject) => {
        api.fetchStudents()
        .then((res) => { resolve(res) })
        .catch((err) => { reject(err) })
      })
      .then((response) => { console.log({"response":response}); state.students =helpers._accessor(response.data.data) })
      .catch((err) => { console.log({"response":err}); state.create_error.error = err.message })
    }

    return await res()
  },

  deleteStudent: async (state,regnum) => {
    const res = () => {
      return new Promise((resolve, reject) => {
        
        api.deleteStudent(regnum)
        .then((res) => { resolve(res) })
        .catch((err) => { reject(err) })
      })
      .then((response) => {  state.delete_status=response.data.status; return response.data.status})
      .catch((err) => { state.delete_error.error = err.message })
    }

    return await res()
  },
}

const actions = {
  addStudent: ({commit},student) => commit("addStudent", student),
  getStudents: ({commit},student) => commit("getStudents"),
  deleteStudent: ({commit},regnum) => commit("deleteStudent", regnum)
}

export default {
  state,
  getters,
  mutations,
  actions
}