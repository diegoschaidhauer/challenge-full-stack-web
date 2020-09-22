import axios from "axios";

export default {
  async getStudents() {
    let res = await axios.get("http://localhost:8000/students");
    return res.data;
  },
  async getStudentSingle(studentId) {
    let res = await axios.get("http://localhost:8000/students/" + studentId);
    return res.data;
  },
};
