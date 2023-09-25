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
  background-image: linear-gradient(to bottom, #19191a, #2d2d4a, #483f7e, #6c50b2, #9b5de5);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  max-width: 100%;
}
</style>
