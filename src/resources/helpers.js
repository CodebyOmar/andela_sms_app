export default {
  _accessor: (obj) => {
    let ret_ = new Array()    
    for(let key in obj){
      ret_.push(obj[key])
    }

    return ret_
  }
}