<template>
  <v-data-table
    :headers="headers"
    :items="employees"
    :items-per-page="5"
    class="elevation-1"
    :multi-sort="true"
    @click:row="selectRow"
  />
</template>

<script>
export default {
  name: "EmployeesTable",
  props: {
    employees: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      headers: [
        { text: "Employee ID", value: "id" },
        { text: "Name", value: "name" },
        { text: "Position Title", value: "title" },
        { text: "Salary", value: "salary" },
      ],
    };
  },
  methods: {
    selectRow(item) {
      this.$emit("select-employee", {
        name: item.name,
        title: item.title,
      });
    },
  },
};
</script>

<style scoped></style>
