<template>
  <div class="student-card">
    <div class="card">
      <div class="card-content">
        <h2 class="is-size-4 has-text-weight-bold">{{ student.name }}</h2>
        <small class="student-register">Matrícula: {{ student.register }}</small>
        <span>{{ student.email }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["student"],
};
</script>
<style lang="scss" scoped>
.card {
  height: 200px;
  background-position: center;
  background-size: cover;
  text-align: center;
}
.card-content {
  padding-top: 50px;
  position: absolute;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.35);
  top: 0;
  padding: 10px;
  height: 200px;
  width: 100%;
  span {
    font-size: 18px;
    text-align: center;
    width: 100%;
    position: absolute;
    bottom: 10px;
    right: 0;
  }
  h2 {
    margin-top: 10px;
  }
}
.student-register {
  color: #fff;
  font-size: 0.75em;
  padding: 2px 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
</style>