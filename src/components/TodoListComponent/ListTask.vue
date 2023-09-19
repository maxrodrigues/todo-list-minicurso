<template>
  <div>
    <div :key="index" v-for="(listTask, index) in listTasks">
      <label>{{ listTask.name }}
        <input type="checkbox" />
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "list-task",
  components: {},
  props: {
    listTasks: {
      type: Array,
      required: true,
    },
  },
  methods: {
    changeTask() {},
    deleteTask() {},
  },
};
</script>

<style lang="scss" scoped></style>
