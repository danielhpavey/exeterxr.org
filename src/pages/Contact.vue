<template>
  <Layout>
    <div class="container">

      <div class="contact-header">
        <h1 class="contact-title">say hi!</h1>
        <p>Leave a note with any questions you might have, We'll get back to you as soon as possible.</p>
      </div>

      <form class="contact-form" 
          name="contact"
          action="https://formstatic.dev" 
            method="post"
          >
        <input type="hidden" name="$processor" value="email">
        <input type="hidden" name="$to" value="danielhpavey@gmail.com">
        <input type="hidden" name="$reply_to" value="info@exeterxr.org">
        <input type="hidden" name="$subject" value="Contact Form Enquiry">
        <input type="hidden" name="$redirect_to" :value="$url('/contact')">
        <div class="sender-info">
          <div>
            <label for="name" class="label">Your name</label>
            <input type="text" name="name" />
          </div>
          <div>
            <label for="email" class="label">Your email</label>
            <input type="email" name="email" />
          </div>
        </div>

        <div class="message">
          <label for="message" class="label">Message</label>
          <textarea name="message"></textarea>
        </div>

        <button class="button">Submit form</button>

      </form>

    </div>
  </Layout>
</template>

<script>
export default {
    // function currentUrl(){
    //  const currentUrl = window.location.href;
    //     console.log(currentUrl)
    // }
}
</script>

<style scoped>
form{
    margin-bottom: var(--default-padding);
}
.contact-header {
  padding: 2rem 0 4rem 0;
}
.contact-title {
  font-size: 4rem;
  margin: 0 0 4rem 0;
  padding: 0;
}
.sender-info {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}
.sender-info > div {
  flex: 1;
  margin-right: 4rem;
}
.sender-info > div:last-of-type {
  margin: 0;
}
input:focus,textarea:focus {
  border-color: var(--color-contrast-1);
}
input,textarea {
  background: transparent;
  border: 1px solid var(--color-base-1);
  outline: none;
  border-radius: 0.3rem;
  padding: 0.8rem 1rem;
  color: inherit;
  font-size: 1rem;
  width: 100%;
}
textarea {
  resize: none;
  height: 140px;
}
.button {
  color: var(--color-base);
  background: var(--color-contrast);
  outline: none;
  border: 0;
  font-size: 0.8rem;
  padding: 0.8rem 1.6rem;
  border-radius: 0.3rem;
  margin-top: 2rem;
  cursor: pointer;
  transition: opacity 0.25s ease;
  font-size: 500;
  letter-spacing: 0.035em;
}
.button:hover {
  opacity: 0.6;
}
.button:focus {
  border: 1px solid var(--color-base-1);
}
</style>

