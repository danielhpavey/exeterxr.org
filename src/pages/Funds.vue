<template>
  <Layout>

    <div class="container hero">
      <div class="header">
        <h1 class="">raise funds</h1>
      </div>
    </div>

    <div
      v-for="item in $page.posts.edges" 
      class="home-post"
    >
    <div v-if="item.node.image">
        <g-image :src="item.node.image"/>
    </div>
      <div class="container home">
        <h2 class="home-title" v-html="item.node.title"></h2>
        <div v-html="item.node.content"></div>
      </div>
    </div>
      
  </Layout>
</template>

<page-query>
query PagesContent{
	posts: allPagePost(filter: { title: { eq: "Funds" }}) {
    edges {
      node {
        id
        path
        title
        content
        image
      }
    }
  }
}

</page-query>

<script>
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
