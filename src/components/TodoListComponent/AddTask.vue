<template>
  <div>
    <input
      v-model="value"
      placeholder="Digite sua nova tarefa ..."
    />
    <button>Adicionar</button>
  </div>
</template>

<script>
export default {
  name: "add-task",
  data() {
    return {
      value: "",
    };
  },
  methods: {
    addTask() {},
  },
};
</script>

<style lang="scss" scoped></style>
