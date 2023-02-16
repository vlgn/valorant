<template>
  <div class="rank-dropdown" :class="{ active: show }">
    <h2 class="rank-dropdown__title">leaderboard</h2>
    <div class="rank-dropdown__selected-rank" @click="handlerDropdown()">
      <span v-if="modelValue">{{ modelValue.title }}</span>
    </div>
    <div class="rank-dropdown__options">
      <div
        class="rank-dropdown__options-item"
        v-for="(item, index) in ranks"
        :key="index"
        @click="rankSelect(item)"
      >
        {{ item.title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RankDropdown",
  props: {
    ranks: {
      type: Object,
      default: () => {},
    },
    modelValue: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    rankSelect(rank) {
      this.$emit("update:modelValue", rank);
      this.handlerDropdown();
    },
    handlerDropdown() {
      this.show = !this.show;
    },
  },
};
</script>

<style lang="scss" scoped>
.rank-dropdown {
  text-transform: uppercase;
  text-align: center;
  &__selected-rank {
    cursor: pointer;
    margin-top: 1rem;
    font-size: 4rem;
    font-weight: 700;
    position: relative;
    span:after {
      content: "";
      background-image: url(../assets/img/arrow-down-white.svg);
      display: inline-block;
      position: absolute;
      width: 3rem;
      height: 3rem;
      top: 0;
      right: -3rem;
      bottom: 0;
      margin: auto;
      transition: transform 0.5s;
    }
  }
  &__options {
    display: none;
    color: #000;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 1rem;
    width: 14rem;
    background-color: #fff;
    box-shadow: 0 30px 30px rgba(0, 0, 0, 0.05);
    overflow: hidden;
    &-item {
      padding: 0 1rem;
      cursor: pointer;
      &:hover {
        color: #fff;
        background: darkblue;
      }
    }
  }
  &.active {
    .rank-dropdown {
      &__selected-rank span:after {
        transform: rotate(-180deg);
      }

      &__options {
        display: block;
      }
    }
  }
}
</style>
