const HomePage = {
    template: `
      <div class="content centered h-100 front-page">
        <div class="centered-text">
          <h1 style="color: rgb(160, 0, 0);">The Fool that doesn't belong to this era</h1>
          <h1 style="color: rgb(160, 0, 0);">The mysterious ruler above the gray fog</h1>
          <h1 style="color: rgb(160, 0, 0);">The King of Yellow and Black who wields good luck</h1>
          <h1 style="color: blue">I pray for you to grant me</h1>
          <h1 style="color: blue">
            <input 
            type="text" 
            v-model="pageName" 
            v-on:keyup.enter="GoToPage"
            placeholder="Enter your desire..."/>
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
        if (safeName.toLowerCase().includes("wisdom")) {
          this.$router.push("/progress");
        }

      }
    }
};