const ProgressPage = {
    inject: ["appState"],

    template: `
        <div class="justified" style="position: relative; top: 30%;">
            <div class="centered-text"">
                <h1 style="color: rgb(160, 0, 0);">What wisdom do you possess?</h1>
                <br>
                <h1>I possess wisdom up to and including</h1>
                <select v-model.number="appState.progress" class="progress-select">
                    <optgroup 
                        v-for="season in seasons" 
                        :key="season.name" 
                        :label="season.name"
                    >
                        <option
                            v-for="episode in season.end - season.start + 1"
                            :key="season.start + episode - 1"
                            :value="season.start + episode - 1"
                        >
                            Episode {{episode}}
                        </option>
                    </optgroup>
                </select>
                <br>
                <br>
                <br>
                <br>
                <button @click="GoToPage" class="progress-button">
                    <h1>Grant me divine wisdom</h1>
                </button>
            </div>
        </div>
    `,

    data() {
      return {
        seasons: [
            {name: "Season 1", start: 1, end: 13},
            {name: "Specials", start: 14, end: 16}
        ],
    };
    },

    methods: {
      GoToPage() {
          this.$router.push("/search");

      },
      UpdateList() {

      }
    }
};


