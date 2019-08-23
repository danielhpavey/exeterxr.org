<template>
    <header class="header">
        <div class="container">
            <div class="left">
                <g-link :to="{ name: 'home' }" class="home-link">
                    <img 
                        src="../../static/Extinction_Symbol.svg"
                        :alt="settings.site_name" 
                        class="logo"
                    />
                </g-link>
            </div>
            <label for="hammy" class="hammy">
                <img 
                    src="../../static/hammy.svg"
                    :alt="Menu" 
                    class="logo"
                />
            </label>
            <input type="checkbox" id="hammy" />
            <nav class="nav right">
                <label for="hammy" class="menu-close">X</label>
                <g-link class="nav__link" to="/">Home</g-link>
                <g-link class="nav__link" to="/about">About</g-link>
                <g-link class="nav__link" to="/events">Events</g-link>
                <g-link class="nav__link" to="/skills">Lend your skills</g-link>
                <g-link class="nav__link" to="/funds">Raise Funds</g-link>
                <g-link class="nav__link" to="/blog">Blog</g-link>
                <g-link class="nav__link" to="/newsletter">Newsletter</g-link>
                <g-link class="nav__link" to="/contact">Contact Us</g-link>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
  data() {
    return {
        logo: require("../../static/logo.svg"),
        settings: require("../../data/theme.json")
    }
  }
}
</script>

<style scoped>
.header {
    position: relative;
    padding: var(--default-padding);
    padding-left: 0;
    padding-right: 0;
}
.header > .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
}
.home-link {
    text-decoration: none;
}
.logo {
    height: 2.5rem;
}

.nav {
    position:fixed;
    right:-100%;
    display:flex;
    flex-direction:column;
    background: var(--color-base);
    top: 0;
    transition: right 0.5s ease;
    width:100%;
    height:100vh;
    padding: var(--default-padding);
}

#hammy {
    display:none;
}

#hammy:checked ~ .nav {
    right: 0;
}

.hammy:hover{
    cursor: pointer;
}

.menu-close {
    text-align: right;
}

.menu-close:hover {
    cursor: pointer;
}

.nav > * {
    font-size: calc(var(--font-base) * 2);
    font-weight: 600;
    text-decoration: none;
    margin-top: 4px;
    margin-right: 1.5rem;
    padding-bottom: 4px;
    border-bottom: 1px solid;
    border-color: transparent;
    transition: color 0.30s;
    transition: padding-left 0.30s;
}
.nav > *:last-of-type {
    margin-right: 0;
}
.nav > *:hover, .nav > *:active{
    color: var(--color-contrast-1);
    padding-left: 1rem;
}

@media only screen and (min-width : 1000px) {
    .nav {
        position:relative;
        right: auto;
        flex-direction: row;
        width:auto;
        height: auto;
    }

    .nav > * {
        font-size: var(--font-base);
    }

    .nav > *:hover, .nav > *:active{
        padding-left: 0;
    }

    .hammy, .menu-close {
        display:none;
    }
}
</style>
