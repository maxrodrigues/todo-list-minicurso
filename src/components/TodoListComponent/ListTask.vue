<template>
  <div class="listTask">
    <div :key="index" v-for="(listTask, index) in listTasks" class="listTask__item">
      <label class="listTask__label">
        <input type="checkbox" v-model="listTask.completed" @change="changeTask(index)" class="listTask__input"/>
        <span class="listTask__checkbox"></span>
        {{ listTask.name }}
      </label>
      <span @click="deleteTask(index)" class="listTask__span">
        <delete-icon></delete-icon>
      </span>
    </div>
  </div>
</template>

<script>
import deleteIcon from "../icons/deleteIcon";
import Swal from "sweetalert2";
export default {
  name: "list-task",
  components: {
    deleteIcon
  },
  props: {
    listTasks: {
      type: Array,
      required: true,
    },
  },
  methods: {
    changeTask(index) {
      this.$emit('changeTask', index)
    },
    deleteTask(index) {

      Swal.fire({
        icon: 'warning',
        title: 'Tem certeza?',
        text: 'Essa ação é irreversivel. Tem certeza que quer excluir essa tarefa?',
        showConfirmButton: true,
        showCancelButton: true,
        confirmButtonText: 'Excluir',
        cancelButtonText: 'Cancelar'
      }).then(response => {
        if (response.isConfirmed) {
          this.$emit('deleteTask', index)
          Swal.fire(
      'Sucesso!',
      'A tarefa foi excluida com sucesso',
      'success'
          )
        }
      })
    },
  },
};
</script>

<style lang="scss" scoped>

.listTask {
  margin-top: 25px;
}

.listTask__item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  margin: 10px 0;
}

.listTask__item:hover {
  background-color: rgba(155, 93, 229, 0.3);
}

.listTask__label {
  font-size: 1.25rem;
  position: relative;
  cursor: pointer;
  padding-left: 10px;
}

.listTask__input {
  visibility: hidden;
}

.listTask__checkbox {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #ffffff;
}

.listTask .listTask__input:active ~ .listTask__checkbox {
  background-color: #2d2d4a;
}

.listTask .listTask__input:checked ~ .listTask__checkbox {
  background-color: #9b5de5;
}

.listTask__checkbox:after {
  display: none;
  position: absolute;
  content: "";
}

.listTask input:checked ~ .listTask__checkbox:after {
  display: block;
}

.listTask .listTask__checkbox:after {
  left: 8px;
  bottom: 5px;
  width: 6px;
  height: 12px;
  border: solid white;
  border-width: 0 4px 4px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

</style>
