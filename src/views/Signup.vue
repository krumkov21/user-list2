<template>
    <v-container class="py-8">
      <v-row justify="center">
        <v-col cols="12" md="8">
          <h1 class="text-h5 font-weight-bold mb-6">Signup</h1>
  
          <v-form ref="signUpForm" @submit.prevent="submitForm">
            <v-text-field
              label="Name"
              v-model="name"
              :rules="nameRules"
              required
            />
  
            <v-text-field
              label="Email"
              type="email"
              v-model="email"
              :rules="emailRules"
              required
            />
  
            <v-text-field
              label="Phone"
              type="tel"
              v-model="phone"
              :rules="phoneRules"
              required
            />
  
            <v-text-field
              label="Address"
              v-model="address"
              :rules="addressRules"
              required
            />
  
            <v-autocomplete
              label="Which role do you choose?"
              v-model="selectedRole"
              :items="roles"
              :rules="[v => !!v || 'Role is required.']"
              required
            />
  
            <v-checkbox
              label="I agree to the terms and conditions"
              v-model="agreeToTerms"
              :rules="agreeToTermsRules"
              required
            />
  
            <!-- Buttons -->
            <v-row class="mt-4" dense>
              <v-col cols="12" sm="6" md="3">
                <v-btn type="submit" color="primary" block :disabled="!formValidity">
                  Submit
                </v-btn>
              </v-col>
              <v-col cols="12" sm="6" md="3">
                <v-btn color="success" block @click="validateForm">Validate</v-btn>
              </v-col>
              <v-col cols="12" sm="6" md="3">
                <v-btn color="warning" block @click="resetValidation">Reset Validation</v-btn>
              </v-col>
              <v-col cols="12" sm="6" md="3">
                <v-btn color="error" block @click="resetForm">Reset</v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: "",
        email: "",
        phone: "",
        address: "",
        selectedRole: null,
        agreeToTerms: false,
        roles: ["Admin", "User", "Moderator"],
        formValidity: false,
  
        nameRules: [(v) => !!v || "Name is required."],
  
        emailRules: [
          (v) => !!v || "Email is required.",
          (v) => v.indexOf("@") !== 0 || "Email should have a username.",
          (v) => v.includes("@") || "Email should include an @ symbol.",
          (v) =>
            v.indexOf(".") - v.indexOf("@") > 1 ||
            "Email should contain a valid domain.",
          (v) => v.includes(".") || "Email should include a period symbol.",
          (v) =>
            v.indexOf(".") <= v.length - 3 ||
            "Email should contain a valid domain extension.",
        ],
  
        phoneRules: [
          (v) => !!v || "Phone number is required.",
          (v) => /^\+?[0-9\s\-]{7,15}$/.test(v) || "Enter a valid phone number.",
        ],
  
        addressRules: [
          (v) => !!v || "Address is required.",
          (v) => v.length >= 5 || "Address must be at least 5 characters long.",
        ],
  
        agreeToTermsRules: [
          (v) =>
            !!v ||
            "You must agree to the terms and conditions to sign up for an account.",
        ],
      };
    },
    methods: {
      validateForm() {
        this.formValidity = this.$refs.signUpForm.validate();
      },
      resetForm() {
        this.$refs.signUpForm.reset();
      },
      resetValidation() {
        this.$refs.signUpForm.resetValidation();
      },
      submitForm() {
        if (this.$refs.signUpForm.validate()) {
          alert("Form submitted!");
        }
      },
    },
  };
  </script>
  