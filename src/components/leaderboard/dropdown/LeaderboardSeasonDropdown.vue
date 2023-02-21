<template>
  <div class="season-dropdown" :class="{ active: show }">
    <div class="season-dropdown__selected-season" @click="handlerDropdown()">
      <span class="season-dropdown__selected-episode" v-if="modelValue">{{
        modelValue.episode
      }}</span>
      <span class="season-dropdown__selected-act" v-if="modelValue"
        >{{ modelValue.act }}
        <ArrowDown class="season-dropdown__arrow"></ArrowDown>
      </span>
      <span v-else>Не выбрано</span>
    </div>
    <div class="season-dropdown__options">
      <div
        v-for="(item, index) in seasons"
        :key="index"
        class="season-dropdown__options-item"
        @click="seasonSelect(item)"
      >
        {{ item.episode + " " + "///" + " " + item.act }}
      </div>
    </div>
  </div>
</template>
<script>
import ArrowDown from "@/components/ArrowDown.vue";
export default {
  name: "LeaderboardSeasonDropdown",
  components: {
    ArrowDown,
  },
  props: {
    seasons: {
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
    seasonSelect(season) {
      this.$emit("update:modelValue", season);
      this.handlerDropdown();
    },
    handlerDropdown() {
      console.log("hello");
      this.show = !this.show;
    },
  },
};
</script>
<style lang="scss">
@import "@/scss/_config.scss";

.season-dropdown {
  cursor: pointer;
  text-transform: uppercase;

  position: relative;
  text-align: center;
  color: #fff;
  height: 100%;
  width: 20%;
  &__arrow {
    position: absolute;
  }
  &__selected-season {
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  &__selected-act {
    font-weight: 700;
    font-size: 4rem;
    padding-top: 1rem;
  }

  &__options {
    font-family: $Pretendard;
    color: #000;
    position: absolute;
    margin-top: 1rem;
    width: 100%;
    height: 20rem;
    top: 9rem;
    left: 50%;
    transform: translateX(-50%);
    background-color: #fff;
    overflow-y: scroll;
    transition: opacity 0.2s ease-out;
    opacity: 0;
    visibility: hidden;
    border: 1px solid #cecece;

    &-item {
      padding: 1rem 1rem;
      cursor: pointer;
      transition: background 0.2s linear;
      &:hover {
        color: #fff;
        background: #000;
      }
    }
  }
}
.active {
  .season-dropdown {
    &__arrow {
      transform: rotate(-180deg);
    }

    &__options {
      opacity: 1;
      visibility: visible;
    }
  }
}
</style>
