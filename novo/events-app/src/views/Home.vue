<template>
  <div class="home">
    <section class="hero is-dark">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Bem vindo ao cadastro de alunos do campus</h1>
          <h2 class="subtitle">Faça seu login para acessar os registros dos alunos</h2>
          <div class="button-block">
            <button
              v-if="!$auth.isAuthenticated"
              @click="login"
              class="button is-xl is-dark"
            >Sign Up</button>
            <h3
              v-if="$auth.isAuthenticated"
              class="is-size-3 has-background-dark welcome"
            >Welcome, {{ $auth.user.name }}!</h3>
          </div>
        </div>
      </div>
    </section>
    <StudentsList />
  </div>
</template>
<script>
import StudentsList from "../components/StudentsList";
export default {
  name: "home",
  components: {
    StudentsList,
  },
  methods: {
    login() {
      this.$auth.loginWithRedirect();
    },
  },
};
</script>
<style lang="scss" scoped>
.hero {
  text-align: center;
  background-image: url("https://i.pinimg.com/originals/b9/cf/7b/b9cf7bc9608f37e095e17d72cee0328b.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 400px;
}
.hero-body .title {
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.6);
  padding: 40px 0 20px 0;
  font-size: 60px;
}
.subtitle {
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.7);
  font-size: 30px;
}
.button-block {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  position: absolute;
  bottom: -150px;
  .button {
    margin-right: 50px;
    padding-left: 50px;
    padding-right: 50px;
  }
  .welcome {
    width: 400px;
    padding: 10px;
    margin-left: auto;
    margin-right: auto;
  }
}
.is-xl {
  font-size: 1.7rem;
}
</style>
