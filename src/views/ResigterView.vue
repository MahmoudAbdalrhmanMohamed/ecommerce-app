<template>
  <vee-form
    @submit.prevent=""
    class="flex flex-col justify-center items-center md:items-start m-12 gap-8"
    :validation-schema="schema"
  >
  
    <div class="form-ele">
      <label for="email">Email</label>
      <vee-field
        type="email"
        name="email"
        id="email"
        placeholder="Enter Your Email"
        class="form-input md:ml-32 md:mr-4"
      />
      <ErrorMessage name="email" class="text-red-600 capitalize" />
    </div>

    <div class="form-ele">
      <label for="password">Password</label>
      <vee-field
        type="password"
        name="password"
        placeholder="Enter Your Password"
        id="password"
        class="form-input md:ml-24 md:mr-4"
      />
      <ErrorMessage name="password" class="text-red-600 capitalize" />
    </div>

    <div class="form-ele">
      <label for="confirm">Confirm Password</label>
      <vee-field
        type="password"
        name="confirm"
        placeholder="Enter Your Confirm Password"
        id="confirm"
        class="form-input md:ml-9 md:mr-4"
      />
      <ErrorMessage name="confirm" class="text-red-600 capitalize" />
    </div>

    <div>
      <vee-field
        type="submit"
        class="hover:bg-slate-600 transition duration-500 rounded-xl shadow-search hover:shadow-sm cursor-pointer text-white px-4 py-3 bg-slate-500"
        value="Submit"
        name="submit"
      />
    </div>
  </vee-form>
</template>
<script setup>
import { reactive } from 'vue'
const schema = reactive({
  email: 'required|min:3|max:40|email',
  password: 'required|min:8|max:16',
  confirm: 'confirmed:@password'
})
</script>

<style scoped>
.v-enter-from.v-leave-to {
  transform: translateY(-100px);
}
.v-enter-to.v-leave-from {
  transform: translateY(0);
}
.v-enter-active.v-leave-active {
  transition: 0.5s;
}
</style>
