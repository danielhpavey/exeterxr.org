<template>
  <div class="layout" :class="{ 'sticky-header': $route.path === '/' }">
    <Header />
    <slot/>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default {
  components: {
    Header,
    Footer
  }
}
</script>


<style>
* {
  box-sizing: border-box;
}

@font-face {
	font-family: system-ui;
	font-style: normal;
	font-weight: 300;
	src: local(".SFNSText-Light"), local(".HelveticaNeueDeskInterface-Light"), local(".LucidaGrandeUI"), local("Segoe UI Light"), local("Ubuntu Light"), local("Roboto-Light"), local("DroidSans"), local("Tahoma");
}

@font-face {
	font-family: system-ui;
	font-style: italic;
	font-weight: 300;
	src: local(".SFNSText-LightItalic"), local(".HelveticaNeueDeskInterface-Italic"), local(".LucidaGrandeUI"), local("Segoe UI Light Italic"), local("Ubuntu Light Italic"), local("Roboto-LightItalic"), local("DroidSans"), local("Tahoma");
}

@font-face {
	font-family: system-ui;
	font-style: normal;
	font-weight: 400;
	src: local(".SFNSText-Regular"), local(".HelveticaNeueDeskInterface-Regular"), local(".LucidaGrandeUI"), local("Segoe UI"), local("Ubuntu"), local("Roboto-Regular"), local("DroidSans"), local("Tahoma");
}

@font-face {
	font-family: system-ui;
	font-style: italic;
	font-weight: 400;
	src: local(".SFNSText-Italic"), local(".HelveticaNeueDeskInterface-Italic"), local(".LucidaGrandeUI"), local("Segoe UI Italic"), local("Ubuntu Italic"), local("Roboto-Italic"), local("DroidSans"), local("Tahoma");
}

@font-face {
	font-family: system-ui;
	font-style: normal;
	font-weight: 500;
	src: local(".SFNSText-Medium"), local(".HelveticaNeueDeskInterface-MediumP4"), local(".LucidaGrandeUI"), local("Segoe UI Semibold"), local("Ubuntu Medium"), local("Roboto-Medium"), local("DroidSans-Bold"), local("Tahoma Bold");
}

@font-face {
	font-family: system-ui;
	font-style: italic;
	font-weight: 500;
	src: local(".SFNSText-MediumItalic"), local(".HelveticaNeueDeskInterface-MediumItalicP4"), local(".LucidaGrandeUI"), local("Segoe UI Semibold Italic"), local("Ubuntu Medium Italic"), local("Roboto-MediumItalic"), local("DroidSans-Bold"), local("Tahoma Bold");
}

@font-face {
	font-family: system-ui;
	font-style: normal;
	font-weight: 700;
	src: local(".SFNSText-Bold"), local(".HelveticaNeueDeskInterface-Bold"), local(".LucidaGrandeUI"), local("Segoe UI Bold"), local("Ubuntu Bold"), local("Roboto-Bold"), local("DroidSans-Bold"), local("Tahoma Bold");
}

@font-face {
	font-family: system-ui;
	font-style: italic;
	font-weight: 700;
	src: local(".SFNSText-BoldItalic"), local(".HelveticaNeueDeskInterface-BoldItalic"), local(".LucidaGrandeUI"), local("Segoe UI Bold Italic"), local("Ubuntu Bold Italic"), local("Roboto-BoldItalic"), local("DroidSans-Bold"), local("Tahoma Bold");
}

body {
  --color-base: rgb(255, 255, 255);
  --color-base-1: rgb(243, 243, 243);
  --color-base-title: rgb(33, 167, 61);
  --color-contrast: rgb(68, 68, 68);
  --color-contrast-1: rgb(43, 43, 43);
  --default-padding: 1rem;
  --font-base: 18px;
  font-family: system-ui;
  margin:0;
  padding: 0;
  font-size: var(--font-base);
  background: var(--color-base);
  color: var(--color-contrast);
  transition: background 0.5s ease;
}

body.dark {
  --color-base: rgb(0, 0, 0);
  --color-base-1: rgb(43, 43, 43);
  --color-contrast: rgb(255, 255, 255);
  --color-contrast-1: rgb(243, 243, 243);
}

h1 {
  letter-spacing: -0.01em;
}

.layout {
  padding: 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

@media (min-width: 860px) {
  .container {
    padding: 0 6rem;
  }
}

a {
  color: inherit;
}

img {
  max-width: 100%;
}

.label {
  display: block;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.hero .header h1 {
    font-size: 4rem;
}

.g-image {
    width:33%;
    float:right;
}
</style>
