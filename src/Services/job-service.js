import http from '../http-common';

class JobDataService {
    getAll() {
      return http.get("/jobs");
    }
  
    get(id) {
      return http.get(`/job/${id}`);
    }
  
    create(data) {
      return http.post("/postJob", data);
    }
  
    update(id, data) {
      return http.put(`/job/${id}`, data);
    }
  
    delete(id) {
      return http.delete(`/job/${id}`);
    }
  
    // deleteAll() {
    //   return http.delete(`/jobs`);
    // }
  }

  export default JobDataService;