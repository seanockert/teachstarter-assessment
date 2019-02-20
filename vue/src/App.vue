<template>
  <div id="app">
    <transition :name="transitionName" mode="out-in">
      <router-view></router-view>
    </transition>
    <footer>
      <div>
        <a
          href="https://github.com/seanockert/teachstarter-assessment"
          title="View the source code for this page on Github"
          target="_blank"
          rel="noopener noreferrer"
          >View source on Github</a
        >
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      transitionName: 'slide-left'
    };
  },
  created() {
    // Load the data from API when component is created
    this.$store.dispatch('loadData');

    // Route animation
    this.$router.beforeEach((to, from, next) => {
      const toDepth = to.path.split('/').length;
      const fromDepth = from.path.split('/').length;
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
      next();
    });
  }
};
</script>

<style lang="scss">
// Global styles, not scoped
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

section,
footer,
header {
  padding: $base-padding * 2;

  > div,
  > ul,
  > header {
    max-width: 52rem;
    margin: 0 auto;
  }

  > header {
    padding: 0;
  }
}

figure {
  margin: 0;
}

img {
  display: block;
  width: auto;
}

p {
  line-height: 1.5;
}

a,
button.ts-link-button {
  color: $color-blue;
  transition: all 0.15s ease-out;

  &:hover,
  &:focus {
    color: $color-dark-blue;
  }
}

footer {
  border-top: 1px solid #ddd;
  margin-top: $base-padding * 3;
  font-size: 0.875rem;
}

// For router animations
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition-duration: 0.35s;
  transition-property: opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(2em, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-2em, 0);
}

@media screen and (max-width: 40rem) {
  section,
  footer,
  header {
    padding: $base-padding;
  }
}
</style>
