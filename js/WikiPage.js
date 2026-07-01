const WikiPage = {
    template: `
        <div class="content">
            <header class="centered-text">
                <h1 style="color: rgb(160, 0, 0);">{{ article.title }}</h1>
            </header>
            <hr>
            <br>
            <div class="flex-container h-90" style="width: 90%; padding: 10px; margin: 0 auto;">
                <div class="main w-75">


                    <h2>Episode overview</h2>
                    <div v-for="section in visibleSections">
                        <br>
                        Episode: {{ section.episode }}
                        <br>
                        {{ section.content }}
                    </div>

                    <br>
                    <br>

                    <h2>Important Possessions</h2>
                    <list v-if="visibleSections.length > 0">
                        <li v-for="possesion in visibleSections[visibleSections.length - 1].possessions">
                            {{ possesion }}
                        </li>
                    </list>
                </div>


                <div class="side h-100">

                    <img 
                        v-if="visibleSections.length > 0" 
                        :src="visibleSections[visibleSections.length - 1].image" 
                        alt="Character Image" 
                        class="character-image">


                    <p v-if="visibleSections.length > 0" style="position: relative; left: 5px;">
                        Sequence
                        {{ visibleSections[visibleSections.length - 1].sequence }}
                    </p>


                    <h4 style="position: relative; left: 5px;">Aliases</h4>
                    <list v-if="visibleSections.length > 0" style="list-style-type: none; position: relative; left: 20px;">
                        <li v-for="section in visibleSections">
                            {{ section.aliases }}
                        </li>
                    </list>
                    
                </div>
            </div>
        </div>
    `,
    inject: ['appState'],
    data() {
        return {
            articles: {},
        }
    },
    
    async mounted() {
        const response = await fetch("./data/wikiArticles.json");
        this.articles = await response.json();
    },

    methods: {
        loadArticle() {
            const name = this.$route.params.name;
            
            this.article = this.articles[name] || {
                title: "Page not found",
                content: "This information is not currently available to you.",
                progress: []
            }
        }
    },
    computed: {
        article() {
            return this.articles[this.$route.params.name] || {
                title: "Page not found",
                content: "This information is not currently available to you.",
                progress: []
            }
        },

        visibleSections() {
            if (!this.article) return [];

            return this.article.progress.filter(progress =>
                progress.episode <= this.appState.progress
            );
        }
    }
}
