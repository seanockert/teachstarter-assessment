<template>
  <button
    title="Like this item"
    :data-tooltip="`${likesCount} people like this item`"
    @click.prevent="incrementLikes"
    :class="{ active: hasFeedback }"
  >
    <span>{{ likesCount | kFormat }}</span>
    <LikeIcon />
  </button>
</template>

<script>
import LikeIcon from '../assets/images/icon-like.svg';

export default {
  name: 'LikeButton',
  components: {
    LikeIcon
  },
  props: {
    id: Number | String
  },
  data() {
    return {
      hasFeedback: false
    };
  },
  methods: {
    incrementLikes: function() {
      // Add one like when button pressed
      this.$store.dispatch('incrementLikes', this.id);

      // Apply a temporary class to the button to trigger CSS animation
      this.hasFeedback = true;
      var self = this;
      setTimeout(function() {
        self.hasFeedback = false;
      }, 500);
    }
  },
  computed: {
    likesCount() {
      // Wait for state to be populated with data from API
      return !this.$store.state.loading
        ? this.$store.getters.likesCount(this.id)
        : 0;
    }
  },
  filters: {
    kFormat(value) {
      // For values over 999, format as 1k, 2k, 3.5k etc.
      return value > 999
        ? (value / 1000).toFixed(1).replace(/\.0$/, '') + 'k'
        : value;
    }
  }
};
</script>

<style lang="scss" scoped>
button {
  margin-left: $base-padding;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 1em;
  display: flex;
  height: 1.6rem;
  align-items: center;
  outline: none;
  position: relative;
  -webkit-appearance: none;

  &.active {
    span {
      color: $color-green;
      transform: scale(1.4);
    }
  }

  &:hover,
  &:focus {
    svg {
      transform: scale(1.2);
    }
  }
  &:active {
    svg {
      transform: scale(0.9);
    }
  }

  // Tooltip
  &:after {
    background: rgba(0, 0, 0, 0.7);
    border-radius: 5px;
    bottom: -52px;
    color: #fff;
    content: attr(data-tooltip);
    display: block;
    font-size: 0.875rem;
    margin-right: -45px;
    opacity: 0;
    padding: $base-padding/2;
    position: absolute;
    right: 0;
    text-align: center;
    text-transform: none;
    transition: all 0.2s 0.4s ease-out;
    transform: translate3d(-50%, 5px, 0);
    width: 90px;
    z-index: 999;
  }

  &:hover,
  &:focus {
    &:after {
      opacity: 1;
      transform: translate3d(-50%, 0, 0);
    }
  }

  &:active {
    &:after {
      display: none;
    }
  }
}

span {
  font-weight: bold;
  padding-right: $base-padding/2;
  transition: all 0.15s cubic-bezier(1, -0.26, 0.06, 1.35);
}

svg {
  transition: all 0.35s cubic-bezier(1, -0.26, 0.06, 1.35);
}
</style>
