<script lang="ts" setup>
import { getCaptcha } from '@/api/captcha'
import { ref } from 'vue'

const image = ref('')

const init = async () => {
  await getCaptcha().then((res) => {
    const data = res.data
    image.value = `${import.meta.env.VITE_API_URL}${data.data.captcha}`
  })
}

init()
</script>

<template>
  <div>
    <h1>Login</h1>
    <img :src="image" alt="" width="90" height="30" />
    <div class="divider">or</div>
    <div class="wrap">
      <div class="avatar placeholder">
        <div class="border-primary text-primary w-10 rounded-full border">
          <span class="text-md uppercase">cl</span>
        </div>
      </div>

      <div class="avatar placeholder">
        <div class="border-secondary text-secondary w-10 rounded-full border">
          <span class="text-md uppercase">cl</span>
        </div>
      </div>

      <div class="avatar placeholder">
        <div class="border-info text-info w-10 rounded-full border">
          <span class="text-md uppercase">cl</span>
        </div>
      </div>

      <div class="avatar placeholder">
        <div class="border-success text-success w-10 rounded-full border">
          <span class="text-md uppercase">cl</span>
        </div>
      </div>
      <div class="avatar placeholder">
        <div class="border-warning text-warning w-10 rounded-full border">
          <span class="text-md uppercase">cl</span>
        </div>
      </div>

      <div class="avatar placeholder">
        <div class="border-error text-error w-10 rounded-full border">
          <span class="text-md uppercase">cl</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
