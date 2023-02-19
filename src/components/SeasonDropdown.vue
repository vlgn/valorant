<template>
  <div class="season-dropdown" :class="{ active: show }">
    <div class="season-dropdown__selected-season" @click="handlerDropdown()">
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
        {{ item.episode + " " + "//" + " " + item.act }}
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
.season-dropdown {
  margin-right: 2rem;
  color: #fff;
  &__selected-episode {
    font-size: 1.8rem;
  }
  &__selected-act {
    font-weight: 700;
    font-size: 3rem;
    margin-top: 1rem;
    &:after {
      content: "";
      background-image: url(../assets/img/arrow-down-white.svg);
      display: inline-block;
      position: absolute;
      width: 3rem;
      height: 3rem;
      right: -3rem;
      bottom: 0;
      margin: auto;
      transition: transform 0.5s;
    }
  }
  &__selected-season {
    cursor: pointer;
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: 400;
    position: relative;
    text-align: center;
    text-transform: uppercase;
    span {
      display: block;
    }
  }
  &__options {
    display: none;
    border: solid 1px #000;
    color: #000;
    position: absolute;
    margin-top: 1rem;
    width: fit-content;
    height: 15rem;
    background-color: #fff;
    box-shadow: 0 30px 30px rgba(0, 0, 0, 0.05);
    overflow-y: scroll;
    &-item {
      padding: 0.5rem 1rem;
      cursor: pointer;
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
      display: block;
    }
  }
}
</style>
