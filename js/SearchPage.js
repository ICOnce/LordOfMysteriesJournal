const SearchPage = {
    template: `
      <div class="content justified">
        <div>
          <h1 style="color: rgb(160, 0, 0);">What wisdom do you seek?</h1>
          <h1 style="color: blue">
            <input 
            type="text"
            v-model="pageName"
            v-on:keyup.enter="GoToPage"
            placeholder="Enter your desire"/>
          </h1>
        </div>
      </div>
    `,

    data() {
      return {
        pageName: ""
    };
    },

    methods: {
      GoToPage() {
        const safeName = this.pageName.trim().replaceAll(" ", "_");
          this.$router.push("/page/" + safeName);

      },
      UpdateList() {

      }
    }
};


