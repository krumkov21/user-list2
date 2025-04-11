<template>
  <v-container>
    <v-row justify="center">
      <v-col
        cols="12"
        sm="8"
        md="6"
      >
        <v-card flat>
          <v-card-title class="text-h6 text-center">
            User List
          </v-card-title>
          <v-card-text>
            <v-row justify="center">
              <v-col
                cols="12"
                sm="10"
              >
                <v-text-field
                  v-model="search"
                  label="Search..."
                  prepend-inner-icon="mdi-magnify"
                />
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-data-table
      :headers="headers"
      :items="filteredItems"
      :search="search"
      class="mb-6"
      hide-default-footer
    >
      <template #item.actions="{ index }">
        <v-btn
          icon
          @click="editItem(index)"
        >
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn
          icon
          @click="deleteItem(index)"
        >
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </template>
    </v-data-table>

    <v-row justify="center">
      <v-col
        cols="12"
        md="6"
      >
        <v-form
          ref="formRef"
          @submit.prevent="submit"
        >
          <v-text-field
            v-model="form.name"
            label="Name"
            :rules="[
              (v) => !!v || 'The field is required',
              (v) =>
                /^[a-zA-Z\s]+$/.test(v) || 'Name must contain only letters',
            ]"
            required
          />

          <v-text-field
            v-model="form.email"
            label="Email"
            :rules="[
              (v) => !!v || 'The field is required',
              (v) =>
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || 'Email must be valid',
            ]"
            required
          />

          <v-text-field
            v-model="form.phone"
            label="Phone"
            :rules="[
              (v) => !!v || 'The field is required',
              (v) =>
                /^(\+359|0)\d{9}$/.test(v) ||
                'Phone must be valid (e.g. +359888123456)',
            ]"
            required
          />

          <v-text-field
            v-model="form.address"
            label="Address"
            :rules="[(v) => !!v || 'The field is required']"
            required
          />

          <v-select
            v-model="form.role"
            :items="roles"
            label="Position"
            :rules="[(v) => !!v || 'Choose a position']"
            required
          />

          <v-btn
            color="primary"
            type="submit"
            class="me-2"
          >
            {{ editIndex === null ? "Add" : "Save" }}
          </v-btn>
          <v-btn
            color="secondary"
            variant="tonal"
            @click="resetForm"
          >
            Cancel
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      search: "",
      editIndex: null,
      form: {
        name: "",
        email: "",
        phone: "",
        address: "",
        role: "",
      },
      roles: ["Admin", "User", "Moderator"],
      headers: [
        { text: "Name", value: "name" },
        { text: "Email", value: "email" },
        { text: "Phone", value: "phone" },
        { text: "Address", value: "address" },
        { text: "Position", value: "role" },
        { text: "Actions", value: "actions", sortable: false },
      ],
    };
  },
  computed: {
    filteredItems() {
      if (!this.search) return this.items;
      return this.items.filter((item) =>
        Object.values(item).some((val) =>
          String(val).toLowerCase().includes(this.search.toLowerCase())
        )
      );
    },
  },
  mounted() {
    this.loadItems();
  },
  methods: {
    loadItems() {
      const saved = localStorage.getItem("myUsers");
      if (saved) {
        this.items = JSON.parse(saved);
      }
    },
    saveItems() {
      localStorage.setItem("myUsers", JSON.stringify(this.items));
    },
    submit() {
      const isValid = this.$refs.formRef.validate();
      if (!isValid) return;

      if (this.editIndex === null) {
        this.items.push({ ...this.form });
      } else {
        this.items[this.editIndex] = { ...this.form };
      }

      this.saveItems();
      this.resetForm();
    },
    editItem(index) {
      this.editIndex = index;
      this.form = { ...this.items[index] };
    },
    deleteItem(index) {
      this.items.splice(index, 1);
      this.saveItems();
      this.resetForm();
    },
    resetForm() {
      this.form = {
        name: "",
        email: "",
        phone: "",
        address: "",
        role: "",
      };
      this.editIndex = null;
    },
  },
};
</script>
