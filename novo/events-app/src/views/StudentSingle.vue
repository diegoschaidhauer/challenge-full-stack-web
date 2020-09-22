<template>
  <div class="student-single">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">{{ student.name }}</h1>
          <h2 class="subtitle">
            <strong>Matrícula:</strong>
            {{ student.register }}
            <br />
            <strong>CPF:</strong>
            {{ student.cpf }}
          </h2>
        </div>
      </div>
    </section>
    <section class="student-content">
      <div class="container">
        <p class="is-size-4 description">{{ student.description }}</p>
        <p class="is-size-5">
          <strong>E-mail:</strong>
          {{ student.email }}
        </p>
        <p class="is-size-5">
          <strong>Histórico:</strong>
          {{ student.history }}
        </p>
      </div>
    </section>
  </div>
</template>
<script>
// NEW - import StudentService
import StudentService from "@/services/StudentService.js";
export default {
  name: "StudentSingle",
  data() {
    return {
      student: {},
    };
  },
  created() {
    this.getStudentData();
  },

  methods: {
    async getStudentData() {
      StudentService.getStudentSingle(this.$route.params.id).then(
        ((student) => {
          this.$set(this, "student", student);
        }).bind(this)
      );
    },
  },
};
</script>
