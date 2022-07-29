<template>
  <div>
    <v-btn
      to="/doc/add"
      nuxt
      color="primary"
      fixed
      right
      top
      fab
      elevation="24"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-container grid-list-xs>
      <h1 class="display-2 mb-4">Documents</h1>
      <v-card>
        <v-card-title primary-title>
          <v-text-field
            v-model="search"
            label="Search"
            append-icon="mdi-magnify"
            @keyup="getDoc()"
          ></v-text-field>
        </v-card-title>
        <v-data-table :headers="headers" :items="docs" hide-default-footer>
          <template v-slot:item.action="{ item }">
            <v-btn
              :to="`/doc/${item.id}/edit`"
              color="success"
              icon
              title="Edit"
            >
              <v-icon>mdi-pen</v-icon>
            </v-btn>
            <v-btn @click="openDelete(item)" color="error" icon>
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </template>
        </v-data-table>
      </v-card>
      <v-pagination
        class="ma-4"
        :length="totlaPage"
        v-model="page"
        total-visible="7"
        @input="getDoc()"
      ></v-pagination>
    </v-container>

    <v-dialog
      v-model="confirmDelete"
      max-width="500px"
      transition="dialog-transition"
    >
      <v-card>
        <v-card-title primary-title>
          Delete Doc
          <v-spacer></v-spacer>
          <v-btn @click="confirmDelete = false" icon>
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-divider></v-divider>
        <v-list-item v-if="current">
          <v-list-item-title v-text="current.title"></v-list-item-title>
        </v-list-item>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="confirmDelete = false" i color="primary" text
            >cancel</v-btn
          >
          <v-btn @click="deleteAction" color="error">delete</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
      totlaPage: 0,
      limit: 5,
      docs: [],
      search: "",
      headers: [
        { text: "ID", value: "id" },
        { text: "Title", value: "title" },
        { text: "Description", value: "description" },
        { text: "Create", value: "created_at" },
        { text: "action", value: "action" }
      ],
      current: null,
      confirmDelete: false
    };
  },
  mounted() {
    this.getDoc();
  },
  methods: {
    openDelete(doc) {
      this.current = doc;
      this.confirmDelete = true;
    },
    async deleteAction() {
      try {
        let { id } = this.current;
        let rs = await this.$axios.delete(`/doc/index/${id}`);
        this.confirmDelete = false;
        let index = this.docs.indexOf(this.current);
        this.docs.splice(index, 1);
        this.$toast.info("deleted");
      } catch (error) {
        this.$toast.error(`${error}`);
      }
    },
    async getDoc() {
      let offset = (this.page - 1) * this.limit;
      let rs = await this.$axios.get("doc", {
        params: {
          limit: this.limit,
          offset: this.search ? 0 : offset,
          search: this.search
        }
      });

      let { data } = rs;
      this.docs = data.docs;
      this.totlaPage = Math.ceil(data.count_all / this.limit);
    }
  }
};
</script>

<style></style>
