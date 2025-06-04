<template>
  <v-card width="400" class="mx-auto mt-10 pa-4">
    <v-card-title class="justify-center">
      <h1 class="text-h5 font-weight-bold">Login</h1>
    </v-card-title>

    <v-card-text>
      <v-form>
        <v-text-field
          label="Username"
          prepend-inner-icon="mdi-account-circle"
        />
        <v-text-field
          :type="showPassword ? 'text' : 'password'"
          label="Password"
          prepend-inner-icon="mdi-lock"
          :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append-inner="showPassword = !showPassword"
        />
      </v-form>
    </v-card-text>

    <v-divider class="my-4" />

    <v-card-actions>
      <v-btn color="success" variant="tonal">Register</v-btn>
      <v-spacer />
      <v-btn color="info" variant="flat">Login</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      showPassword: false,
    };
  },
};
</script>
