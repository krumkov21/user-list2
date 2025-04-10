<template>
  <form @submit.prevent="submit">
    <v-text-field
      v-model="name.value.value"
      :counter="20"
      :error-messages="name.errorMessage.value"
      label="Name"
      required
    />

    <v-text-field
      v-model="phone.value.value"
      :counter="15"
      :error-messages="phone.errorMessage.value"
      label="Phone Number"
      required
    />

    <v-text-field
      v-model="email.value.value"
      :error-messages="email.errorMessage.value"
      label="E-mail"
      required
    />

    <v-text-field
      v-model="address.value.value"
      :error-messages="address.errorMessage.value"
      label="Address"
      required
    />

    <v-select
      v-model="role.value.value"
      :items="roles"
      :error-messages="role.errorMessage.value"
      label="Select Role"
      required
    />

    <div class="mt-4">
      <v-btn :loading="loading" color="primary" class="me-4" type="submit">
        Submit
      </v-btn>
      <v-btn color="secondary" @click="resetForm">Clear</v-btn>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { useForm, useField } from 'vee-validate'

// Validation rules (без yup)
const { handleSubmit, resetForm } = useForm({
  validationSchema: {
    name: (val) =>
      val && val.length >= 2 || 'Name must be at least 2 characters.',
    phone: (val) =>
      /^[0-9-]{7,}$/.test(val) || 'Phone must be at least 7 digits.',
    email: (val) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) || 'Invalid email address.',
    address: (val) =>
      val && val.length > 3 || 'Address must be at least 4 characters.',
    role: (val) =>
      !!val || 'Please select a role.',
  },
})

// Fields
const name = useField('name')
const phone = useField('phone')
const email = useField('email')
const address = useField('address')
const role = useField('role')

// Dropdown options
const roles = ref(['Admin', 'User', 'Moderator'])

// Loading spinner for submit button
const loading = ref(false)

// Submit handler
const submit = handleSubmit(async (values) => {
  loading.value = true
  try {
    const res = await fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })

    if (!res.ok) {
      const errText = await res.text()
      throw new Error('Server error: ' + errText)
    }

    alert('User added successfully!')
    resetForm()
  } catch (err) {
    console.error(err)
    alert('Something went wrong while adding the user.')
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
form {
  max-width: 600px;
  margin: 0 auto;
}
</style>
