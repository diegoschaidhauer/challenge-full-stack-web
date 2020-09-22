<template>
  <div class="students container">
    <h2 class="subtitle is-3">Confira os alunos registrados</h2>
    <div class="columns is-multiline">
      <div
        v-for="student in students"
        :student="student"
        :key="student.id"
        class="column is-one-quarter"
      >
        <router-link :to="'/student/' + student.id">
          <StudentCard :student="student" />
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import StudentCard from "@/components/StudentCard";
import StudentService from "@/services/StudentService.js";
export default {
  name: "StudentsList",
  components: {
    StudentCard,
  },
  data() {
    return {
      student: {},
      students: [],
    };
  },
  created() {
    this.getStudentsData();
  },

  methods: {
    async getStudentsData() {
      StudentService.getStudents().then(
        ((students) => {
          this.$set(this, "students", students);
        }).bind(this)
      );
    },
  },
};
</script>
<style lang="scss" scoped>
.students {
  margin-top: 100px;
  text-align: center;
}
</style>
