<template>
  <router-link :to="'/listing/' + listing.id">
    <figure>
      <img :src="`/images/listings/${listing.img}`" alt="" />
    </figure>
    <div>
      <h3>{{ listing.title }}</h3>
      <p>{{ listing.summary }}</p>
    </div>
    <LikeButton :id="listing.id" />
  </router-link>
</template>

<script>
import LikeButton from './LikeButton';

export default {
  name: 'Listings',
  components: {
    LikeButton
  },
  props: {
    listing: Object
  }
};
</script>

<style lang="scss" scoped>
a {
  display: flex;
  padding: $base-padding * 2 0;
  text-decoration: none;
  color: inherit;
  transition: all 0.25s ease-out;

  &:hover,
  &:focus {
    color: inherit;

    img {
      transform: scale(1.1);
    }

    h2,
    h3 {
      color: $color-dark-blue;
      text-decoration: underline;
    }
  }
}

img {
  width: 100px;
  height: 100px;
  margin-right: $base-padding;
  transition: all 0.25s ease-out;
}

h2,
h3 {
  margin: 0;
  transition: all 0.15s ease-out;
}
</style>
