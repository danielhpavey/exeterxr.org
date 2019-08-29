<template>
  <Layout>
    <div class="container hero">
      <div class="header">
        <h1 class="">events</h1>
      </div>
    </div>

    <div class="home-post">
      <div class="container home">
    <ul v-if="posts">
    <li v-for="post of posts.data">
      <p><strong>{{ post.name }}</strong></p>
      <p><strong>{{ post.start_time | formatDate }}</strong></p>
      <p>{{post.description}}</p>
    </li>
  </ul>

  <ul v-if="errors && errors.length">
    <li v-for="error of errors">
      {{error.message}}
    </li>
  </ul>
      </div>
  </div>

      
  </Layout>
</template>

<page-query>
</page-query>
<script>
  import axios from 'axios';
  export default {
  data() {
    return {
      posts:  [],
      errors: []
    }
  },

   created() {
    axios.get(`https://graph.facebook.com/v4.0/ExtinctionRebellion/events?access_token=EAAAAGGZA8EFcBAKondn6vVIa1PemOhZADzKqOCWHtCRsnyrdU5VZAyKMKxdxwE50i8tyDmuJSA8WhEtro4lfI2rk5ej9KHzeIw5HeMNl5FO9jxwOVNpL3UZC0LRaGNbIqoUkjJZB9kxghZASVL7eGCvFdgkXcfl7KrfwH3DXKpqJJ7RBZCnIi7lHLR9irZCzZArIZD`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.posts = response.data
        window.posts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })

  }
  }
</script>

<style scoped>
.container.home {
    padding: 0 2rem;
    max-width:720px;
}
.container-home {
    padding: 0;
    width:100%;
    max-width:100%;
}
.home-hero {
  padding: 4rem 0;
  text-align: center;
  color: var(--color-base);
  background: var(--color-base-title);
}
.home-header {
  font-size: 3rem;
  font-weight: 700;
  padding: 0;
  margin: 0;
}
.home-post {
  display: block;
  padding: 2rem 0;
  text-decoration: none;
  transition: background 0.5s ease;
}
.home-post > * {
  transition: transform 0.5s ease;
}

.home-post h1,
.home-post h2 {
  margin: 0;
  padding: 0;
}
.home-title {
  font-size: 2rem;
  color: var(--color-contrast);
}
.home-excerpt {
  color: var(--color-contrast-1);
}

.hero .header h1 {
    font-size: 4rem;
}

@media (min-width: 560px) {
  .home-post {
    padding: 3rem 0;
  }
}

@media (min-width: 860px) {
  .home-post {
    padding: 5rem 0;
  }
}
</style>
