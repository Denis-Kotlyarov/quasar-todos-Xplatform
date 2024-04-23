<template>
  <q-page class="container q-pa-lg">
    <h5 class="q-my-md">Contacts</h5>
    <form @submit="sub">
      <div>
        <input class="q-pa-sm" type="text" placeholder="Your name" name="name" required />
      </div>
      <div>
        <input class="q-pa-sm" type="email" placeholder="Email" name="email" required />
      </div>
      <div>
        <textarea class="q-pa-sm text-area" placeholder="Your message" name="message" required />
      </div>
      <div>
        <button class="q-pa-sm sendBtn  text-white no-border" type="submit">Send a message</button>
      </div>
    </form>
  </q-page>
</template>

<script setup>
  const sub = () => {
    alert('Thanks for your feedback!')
  }
</script>

<style scoped lang="scss">
  @import "../css/quasar.variables.scss";
  .container {
    max-width: 1024px;
    margin: 0 auto;
  }
  .sendBtn {
    border-radius: 10px;
    width: 160px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    background: $primary;
  }
  .sendBtn:hover {
    background-color: rgb(81, 26, 89);
  }
  .text-area {
    resize: none
  }
  input {
    outline: none;
  }
  textarea {
    height: 130px
  }
  input, textarea {
    width: 540px;
    margin: 20px 0
  }

  @media (max-width: 840px) {
    input, textarea {
      width: 90%;
    }
  }
</style>