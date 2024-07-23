<template>
    <vee-form class="flex flex-col items-center justify-center gap-4 ml-12" :validation-schema="schema">
        <vee-field
        type="search"
        class="px-3 py-2 shadow-search rounded-lg outline-none w-96"
        placeholder="Enter Search Key"
        name="search"
        />
        <ErrorMessage name="search" class="text-red-600 font-medium capitalize text-lg" />
        <vee-field
        type="submit"
        class="hover:bg-slate-600 transition duration-500 rounded-xl shadow-search hover:shadow-sm cursor-pointer text-white px-4 py-3 bg-slate-500"
        value="Submit"
        name="submit"
        @click.prevent=""
      />
    </vee-form>
</template>
<script setup>
import { reactive } from 'vue';
const schema =  reactive({
    search:'required|min:3|max:16|alphaSpaces'
});
</script>