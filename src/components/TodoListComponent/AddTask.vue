<template>
  <div class="addTask">
    <input
        class="addTask__input"
      v-model="value"
      placeholder="Digite sua nova tarefa ..."
    />
    <button
        class="addTask__button"
        @click="addTask"
    >
      Adicionar
    </button>
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
    addTask() {
      this.$emit('addTask', this.value)
      this.value = ''
    },
  },
};
</script>

<style lang="scss" scoped>

.addTask {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.addTask__button {
  width: 152px;
  height: 40px;
  border: none;
  border-radius: 0.25rem;
  background-color: #9b5de5;
  color: #fff;
  font-size: 0.87rem;
  line-height: 1.5rem;
  font-weight: 600;
}

.addTask__input {
  width: 80%;
  height: 40px;
  border: none;
  border-radius: 0.25rem;
  padding-left: 5px;
  font-size: 16px;
}
</style>
