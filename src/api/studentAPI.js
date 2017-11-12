import {http} from "../resources/resource"

export default {
    create: async (student) => {
      const add = () => {
        return new Promise((resolve, reject) => {
          http.post("/new", student)
          .then((response) => { resolve(response) })
          .catch((error) => { reject(error) })
        })
      }

      return await add()
    },

    fetchStudents: async (student) => {
      const fetch = () => {
        return new Promise((resolve, reject) => {
          http.get("/getstudents")
          .then((response) => { resolve(response) })
          .catch((error) => { reject(error) })
        })
      }

      return await fetch()
    },

    deleteStudent: async (regnum) => {
      const del = () => {
        return new Promise((resolve, reject) => {
          http.delete("/delete/"+regnum)
          .then((response) => { resolve(response) })
          .catch((error) => { reject(error) })
        })
      }

      return await del()
    },

}