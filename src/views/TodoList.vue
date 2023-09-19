<template>
  <div class="todolist">
    <Header></Header>
    <Tasks></Tasks>
  </div>
</template>

<script>
import Header from "../components/TodoListComponent/Header.vue";
import Tasks from "../components/TodoListComponent/Tasks.vue";

export default {
  name: "todolist",
  props: {
    msg: String,
  },
  components: {
    Header,
    Tasks,
  },
};
</script>

<style scoped>
.todolist {
  background-color: #0c0c0d;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  max-width: 100%;
}
</style>
