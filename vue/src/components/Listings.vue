<template>
  <main>
    <Search />
    <section>
      <header>
        <h2>The list</h2>
      </header>
      <ul v-if="loading" class="skeleton">
        <li>
          <figure></figure>
          <div>
            <h2></h2>
            <p></p>
            <p></p>
          </div>
          <span class="skeleton-button"></span>
        </li>
        <li>
          <figure></figure>
          <div>
            <h2></h2>
            <p></p>
            <p></p>
          </div>
          <span class="skeleton-button"></span>
        </li>
      </ul>

      <transition-group
        v-if="!loading"
        name="staggered-fade"
        tag="ul"
        v-bind:css="false"
        v-on:before-enter="beforeEnter"
        v-on:enter="enter"
        v-on:leave="leave"
      >
        <li v-for="listing in filteredListings" :key="listing.id">
          <ListingItem :listing="listing" />
        </li>
      </transition-group>

      <div v-if="filteredListings.length == 0" class="no-listings">
        <em>No listings found.</em>
        <button @click="clearFilter">View all listings</button>
      </div>
    </section>
  </main>
</template>

<script>
import { mapGetters } from 'vuex';
import Search from './Search';
import ListingItem from './ListingItem';

// Third-party library for animating the list items on filter
import Velocity from 'velocity-animate';

export default {
  name: 'Listings',
  components: {
    Search,
    ListingItem
  },
  methods: {
    clearFilter: function() {
      // Clear the search filter and field
      this.$store.dispatch('filterListings', '');
    },
    beforeEnter: function(el) {
      // For animating list on filter
      el.style.opacity = 0;
    },
    enter: function(el, done) {
      // For animating list on filter
      var delay = el.dataset.index * 100;
      setTimeout(function() {
        Velocity(el, { opacity: 1, translateY: 0 }, { complete: done });
      }, delay);
    },
    leave: function(el, done) {
      // For animating list on filter
      var delay = el.dataset.index * 100;
      setTimeout(function() {
        Velocity(el, { opacity: 0, translateY: -20 }, { complete: done });
      }, delay);
    }
  },
  computed: Object.assign(mapGetters(['filteredListings', 'filterQuery']), {
    loading() {
      // @todo move to a getter
      return this.$store.state.loading;
    }
  })
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/_skeleton.scss';

ul {
  list-style: none;
  padding: 0;
}

.no-listings button {
  border: none;
  background: none;
  color: $color-blue;
  cursor: pointer;
  font-size: inherit;
  outline: none;
  padding: 0 $base-padding/2;
  -webkit-appearance: none;

  &:hover,
  &:focus {
    color: $color-dark-blue;
    text-decoration: underline;
  }
}

.skeleton li {
  display: flex;
  padding: $base-padding * 2 0;

  > div {
    width: 100%;
  }
}
</style>
