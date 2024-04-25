<template>
  <q-page class="bg-deep-purple-2 column">
    <div class="container">
      <div class="flex justify-between items-center">
        <h5 class="q-my-none q-pt-xl q-pb-md q-pl-lg text-weight-medium">Todos</h5>
      </div>

      <div class="q-mb-lg">
        <q-input filled v-model="newTodo" placeholder="Buy bread..." @keyup.enter="addNewTodo">
          <template v-slot:prepend>
            <q-icon name="event" v-slot:prepend/>
          </template>
          <template v-slot:append class="flex justify-between">
            <q-btn color="accent" label="Add task" class="btnText" :disabled="!newTodo" @click="addNewTodo"/>
          </template>
        </q-input>
      </div>
      
      <div class="sign">
        <q-list>
          <!-- tada bounceOutDown прикольные -->
          <transition-group
            appear
            enter-active-class="animated fadeIn"
            leave-active-class="animated tada"
          >
            <q-item
              @click="task.done = !task.done"
              clickable
              tag="label" 
              v-ripple
              v-for="task in tasks" 
              :key="task.id" 
              class="list-item q-my-md"
              :class="{'done bg-green-2' : task.done}"
            >
              <q-item-section avatar>
                <!-- class="no-pointer-events" -->
                <q-checkbox v-model="task.done" val="teal" color="accent"/> 
              </q-item-section>
              <q-item-section>
                <q-item-label :class="{'text-decor' : task.done}">{{ task.title }}</q-item-label>
              </q-item-section>
              <q-item-section v-if="task.done" side>
                <q-icon name="delete" class="delete-icon" color="accent" @click="deleteTodo(task)"/>
              </q-item-section>
            </q-item>
          </transition-group>
        </q-list>
      </div>
    </div>
  </q-page>
</template>

<script setup>
  import { reactive, ref, onMounted, watch, nextTick } from 'vue';
  import { useQuasar } from 'quasar';

  const tasks = reactive([
    // { id: 1, title: "Task 1. TEST TODO.", done: false },
    // { id: 2, title: "Task 2. Fado oadw lda kdwoad.", done: false },
    // { id: 3, title: "Task 3. Goflkgja JAwjwrq.", done: false },
  ])
  const newTodo = ref("")

  const $q = useQuasar()

  function deleteTodo(task) {
    this.$q.dialog({
      title: 'Are you sure...',
      message: 'Do you wanna delete todo?',
      cancel: true,
      persistent: true
    }).onOk(() => {
      const currentTodo = tasks.indexOf(task, 0)
      tasks.splice(currentTodo, 1)

      $q.notify({message: 'Todo had deleted.', color: 'primary'})
    })
  }

  function addNewTodo() {
    tasks.push(
      {
        id: tasks.length + 1, 
        title: newTodo.value, 
        done: false
      }
    )
    newTodo.value = ""
  }

  onMounted(() => {
    const labels = document.querySelectorAll('.sign .q-item');
    // Удаляем класс q-hoverable у каждого элемента label
    labels.forEach(label => {
      label.classList.remove('q-hoverable');
    });
    //localStorage получаем
    if (localStorage.getItem('todo_items')) {
      let localTasks = JSON.parse(localStorage.getItem('todo_items'))
      //console.log(localTasks)
      tasks.push(...localTasks)
    }
  })

  watch(
    tasks,
    async (newTasks) => {
      await nextTick();

      const labels = document.querySelectorAll('.sign .q-item');
      labels.forEach(label => {
        label.classList.remove('q-hoverable');
      });
      //localStorage задаем
      localStorage.setItem('todo_items', JSON.stringify(newTasks))
    },
    { deep: true }
  )
  
</script>

<style scoped>
  .container {
    min-width: 90%;
  }
  .list-item {
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 10px;
    border: 1px solid #d1c4e9;
    animation-duration: 0.6s; /* don't forget to set a duration! */
    animation-timing-function: ease-in-out;
  }
  .done {
    color: rgb(0, 192, 32);
    border: 1px solid white
  }
  .text-decor {
    text-decoration: line-through;
  }
  .delete-icon {
    cursor: pointer;
  }
  .btnText {
    font-size: 14px;
  }
</style>