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
import Swal from 'sweetalert2'
export default {
  name: "add-task",
  data() {
    return {
      value: "",
    };
  },
  methods: {
    addTask() {
      if (this.value.length > 0) {
        this.$emit('addTask', this.value)
        this.value = ''
        return;
      }

      Swal.fire(
          'Houve um erro',
          'O campo nova tarefa está vazio!',
          'error'
      )

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
  font-family: 'Montserrat', sans-serif;
}

.addTask__input {
  width: 80%;
  height: 40px;
  border: none;
  border-radius: 0.25rem;
  padding-left: 5px;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
}

.addTask__input:focus {
  outline: none;
}


</style>
