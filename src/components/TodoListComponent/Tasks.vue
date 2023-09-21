<template>
  <div class="task">
    <add-task></add-task>
    <list-task
      :list-tasks="listTasks"
    ></list-task>
  </div>
</template>

<script>
import AddTask from "./AddTask.vue";
import ListTask from "./ListTask.vue";
export default {
  name: "tasks",
  components: {
    AddTask,
    ListTask,
  },
  data() {
    return {
      listTasks: [],
    };
  },
  methods: {
    createNewTask() {},
    deleteTask() {},
    getList() {
      this.listTasks = [
        {
          name: "Assistir o melhor filme de 2023",
          completed: false,
        },
        {
          name: "Assistir uma série em casa",
          completed: false,
        },
        {
          name: "Arrumar a casa ",
          completed: true,
        },
      ];
    },
  },
  mounted() {
    this.getList();
  },
};
</script>

<style lang="scss" scoped>
.task {
  color: #fbf9fe;
  box-sizing: border-box;
  width: 100%;
  max-width: 1080px;
  padding: 0 20px;
}
</style>
