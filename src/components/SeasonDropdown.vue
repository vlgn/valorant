<template>
  <div
    class="season-dropdown"
    :class="{ active: show }"
    @click="handlerDropdown()"
  >
    <div class="season-dropdown__selected-season">
      <span class="season-dropdown__selected-episode" v-if="modelValue">{{
        modelValue.episode
      }}</span>
      <span class="season-dropdown__selected-act" v-if="modelValue">{{
        modelValue.act
      }}</span>
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
export default {
  name: "SeasonDropdown",
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
  justify-content: center;
  display: flex;
  align-items: center;
  position: relative;
  text-align: center;
  color: #fff;
  width: 20rem;

  &__selected-act {
    font-weight: 700;
    font-size: 4rem;
    padding-top: 1rem;

    &:after {
      content: "";
      background-image: url(../assets/img/arrow-down-white.svg);
      position: absolute;
      width: 3rem;
      height: 3rem;
      margin: auto;
      transition: transform 0.5s;
    }
  }
  &__selected-season {
    span {
      display: block;
    }
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
    &__selected-act:after {
      transform: rotate(-180deg);
    }

    &__options {
      opacity: 1;
      visibility: visible;
    }
  }
}
</style>
