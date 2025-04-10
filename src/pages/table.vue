<template>
  <v-card title="Employees" flat>
    <template v-slot:text>
      <v-text-field
        v-model="search"
        label="Търсене"
        prepend-inner-icon="mdi-magnify"
        variant="outlined"
        hide-details
        single-line
      />
    </template>

    <v-data-table :headers="headers" :items="employees" :search="search">
      <template #item.actions="{ item }">
        <v-btn icon color="blue" @click="editEmployee(item)">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn icon color="red" @click="deleteEmployee(item.id)">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </template>
    </v-data-table>

    <v-btn
      color="primary"
      prepend-icon="mdi-account-plus"
      class="mt-4 rounded-pill px-6"
      to="/addUser"
      elevation="2"
    >
      Add User
    </v-btn>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      headers: [
        { text: "Name", value: "name" },
        { text: "Email", value: "email" },
        { text: "Phone", value: "phone" },
        { text: "Address", value: "address" },
        { text: "Role", value: "role" },
        { text: "Actions", value: "actions", sortable: false }, // 👈 нова колона
      ],
      employees: [],
    };
  },
  mounted() {
    this.fetchEmployees();
  },
  methods: {
    async fetchEmployees() {
      try {
        const response = await fetch("db.json"); // 🟢 правилен API път
        const data = await response.json();
        this.employees = data.users;
      } catch (err) {
        console.error("Грешка при зареждане на данни:", err);
      }
    },
    async deleteEmployee(id) {
      if (confirm("Сигурен ли си, че искаш да изтриеш този потребител?")) {
        try {
          await fetch(`http://localhost:3000/users/${id}`, {
            method: "DELETE",
          });
          this.fetchEmployees(); // Презареди списъка
        } catch (err) {
          console.error("Грешка при изтриване:", err);
        }
      }
    },
    editEmployee(user) {
      // Навигация към форма за редакция (може и модален диалог)
      this.$router.push({ name: "EditUser", params: { id: user.id } });
    },
  },
};
</script>
