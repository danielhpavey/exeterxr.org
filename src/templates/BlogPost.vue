<template>
  <Layout>
    <div class="journal">
        <div class="container hero">
          <div class="header">
            <h1 v-html="$page.post.title" class="journal-title" />
          </div>
        </div>
      <div class="container journal-container">

        <div class="journal-header">
          <div class="journal-meta">
            <!-- <div class="journal&#45;author"> -->
            <!--   <span class="label">Author</span> -->
            <!--   <span class="author&#45;name" v&#45;text="$page.post.author" /> -->
            <!-- </div> -->
            <div class="journal-date">
              <span class="label">Date</span>
              <span>{{ $page.post.date | formatPrettyDate }} </span>
            </div>
            <!-- <div class="journal&#45;time"> -->
            <!--   <span class="label">Time</span> -->
            <!--   <span>{{ $page.post.timeToRead }} min read</span> -->
            <!-- </div> -->
          </div>          
        </div>

        <BlogContent :content="$page.post.content" />

      </div>
    </div>
  </Layout>
</template>

<page-query>
query BlogPost ($path: String!) {
  post: blogPost (path: $path) {
    title
    author
    date (format: "D. MMMM YYYY")
    timeToRead
    content
  }
}
</page-query>

<script>
import BlogContent from "@/components/BlogContent"

export default {
  components: {
    BlogContent
  },
  metaInfo () {
    return {
      title: this.$page.post.title
    }
  }
}
</script>

<style scoped>
.journal-container {
  max-width: 840px;
}
.journal-header {
  padding: 2rem 0 4rem 0;
}
.journal-meta {
  display: flex;
  flex-wrap: wrap;
}
.journal-meta > div {
  margin-right: 4rem;
}
.journal-meta > div:last-of-type {
  margin: 0;
}
</style>
