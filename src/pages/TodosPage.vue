<template>
  <q-page class="bg-deep-purple-2 column">
    <div class="container">
      <h5 class="q-my-none q-pt-xl q-pb-md q-pl-lg text-weight-medium">Todos</h5>

      <q-list>
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
  </q-page>
</template>

<script setup>
  import { reactive } from 'vue';

  const tasks = reactive([
    { id: 1, title: "Task 1. Go lda kdwoad.", done: false },
    { id: 2, title: "Task 2. Fado oadw lda kdwoad.", done: false },
    { id: 3, title: "Task 3. Goflkgja JAwjwrq.", done: false },
  ])

  function deleteTodo(task) {
    const currentTodo = tasks.indexOf(task, 0)
    tasks.splice(currentTodo, 1)
  }
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
</style>