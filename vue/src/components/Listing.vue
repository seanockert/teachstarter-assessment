<template>
  <section>
    <div v-if="loading" class="skeleton">
      <figure></figure>
      <div>
        <h2></h2>
        <p></p>
        <p></p>
      </div>
      <span class="skeleton-button"></span>
    </div>
    <div v-if="listing">
      <figure>
        <img :src="`/images/listings/${listing.img}`" alt="" />
      </figure>
      <div>
        <h2>{{ listing.title }}</h2>
        <div v-html="listing.content"></div>
      </div>
      <LikeButton :id="listing.id" />
    </div>

    <div>
      <router-link to="/">&larr; Back to listing</router-link>
    </div>
  </section>
</template>

<script>
// @todo fetch listing data directly from API instead of loading from global state

import LikeButton from './LikeButton';

export default {
  name: 'Listing',
  components: {
    LikeButton
  },
  props: {
    id: Number
  },
  computed: {
    listing() {
      // Wait for state to be populated with data from API before displaying this listing
      return !this.$store.state.loading
        ? this.$store.getters.fetchListing(this.$route.params.id)
        : null;
    },
    loading() {
      // Show a loading skeleton layout if 'true'
      return this.$store.state.loading;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/_skeleton.scss';

section > div {
  display: flex;
  padding: $base-padding * 2 0;
}

img {
  width: 100px;
  height: 100px;
  margin-right: $base-padding;
}

h2 {
  margin: 0;
}
</style>
