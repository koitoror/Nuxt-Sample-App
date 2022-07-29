export default function ({$axios, store, redirect}) {
  $axios.onRequest(request => {
    let token = localStorage.getItem('token')
    if(token){
      request.headers.common['Authorization'] = `Bearer ${token}`
    }
    return request
  })
}