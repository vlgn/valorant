<template>
  <div class="rank-dropdown" :class="{ active: show }">
    <div class="rank-dropdown__wrap" @click="handlerDropdown()">
      <h2 class="rank-dropdown__title">leaderboard</h2>
      <div class="rank-dropdown__selected-rank" v-if="modelValue">
        {{ modelValue.title }}
        <ArrowDown class="rank-dropdown__arrow"></ArrowDown>
      </div>
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
import ArrowDown from "@/components/ArrowDown.vue";
export default {
  name: "LeaderboardRankDropdown",
  components: {
    ArrowDown,
  },
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
@import "@/scss/_config.scss";
.rank-dropdown {
  cursor: pointer;
  height: 100%;
  width: 65%;
  text-align: center;
  text-transform: uppercase;
  position: relative;

  &__arrow {
    position: absolute;
    top: 0;
    bottom: 0;
  }
  &__wrap {
    height: 100%;
    justify-content: center;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  &__selected-rank {
    margin-top: 1rem;
    font-size: 4rem;
    font-weight: 700;
    position: relative;
  }
  &__options {
    font-family: $Pretendard;
    color: #000;
    position: absolute;
    width: 15rem;
    background-color: #fff;
    overflow: hidden;
    top: 9rem;
    right: 0;
    margin-top: 1rem;
    transition: opacity 0.2s ease-out;

    visibility: hidden;
    opacity: 0;
    border: 1px solid #cecece;
    &-item {
      padding: 1rem 1rem;
      cursor: pointer;
      transition: background 0.3s linear;
      &:hover {
        color: #fff;
        background: #000;
      }
    }
  }
  &.active {
    .rank-dropdown {
      &__arrow {
        transform: rotate(-180deg);
      }

      &__options {
        visibility: visible;
        opacity: 1;
      }
    }
  }
}
</style>
