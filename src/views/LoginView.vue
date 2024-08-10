<template>
  <vee-form
    class="flex flex-col justify-center items-center md:items-start m-12 gap-8"
    :validation-schema="schema"
    @submit="login"
  >
    <div class="form-ele">
      <label for="email">Email</label>
      <vee-field
        type="email"
        name="email"
        id="email"
        placeholder="Enter Your Email"
        class="form-input md:ml-36 md:mr-4"
        v-model="formInputs.email"
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
        class="form-input md:ml-28 md:mr-4"
        v-model="formInputs.password"
      />
      <ErrorMessage name="password" class="text-red-600 capitalize" />
    </div>

    <div>
      <vee-field
        type="submit"
        class="hover:bg-slate-600 transition duration-700 rounded-xl shadow-search hover:shadow-sm cursor-pointer text-white px-4 py-3 bg-slate-500"
        value="Submit"
        name="submit"
      />
    </div>
    <div>
      <RouterLink
        :to="{ name: 'regsiter' }"
        class="hover:bg-slate-600 transition duration-700 rounded-xl shadow-search hover:shadow-sm cursor-pointer text-white px-4 py-3 bg-slate-500"
        name="submit"
        >Signup Instead</RouterLink
      >
    </div>
  </vee-form>
</template>
<script setup>
import { reactive } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useRouter, RouterLink } from 'vue-router'

const schema = reactive({
  email: 'required|min:3|max:40|email',
  password: 'required|min:8|max:16'
})

let formInputs = reactive({
  email: '',
  password: ''
})

const router = useRouter()
const store = useAuthStore()
const login = () => {
  if (store.login(formInputs)) router.push({ name: 'home' })
}
</script>
