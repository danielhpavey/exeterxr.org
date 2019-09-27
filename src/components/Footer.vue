<template>
    <footer class="footer">
        <div class="container">
            <img 
                src="../../static/XR-logotype-4col-Black-Stacked.svg"
                :alt="settings.site_name" 
                class="xr-logo"
            />
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            settings: require("../../data/theme.json")
        }
    }
}
</script>

<style scoped>
.footer {
    font-size: 0.8rem;
    padding: 6rem 0;
    background: var(--color-xr);
}
.xr-logo {
    width:100%;
    max-width:500px;
    margin: 0 auto;
    display:block;
}
</style>
