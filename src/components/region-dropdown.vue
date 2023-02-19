<template>
  <div class="region-dropdown" :class="{ active: show }">
    <div class="region-dropdown__selected-region" @click="handlerDropdown()">
      <span v-if="modelValue">{{ modelValue.title }}</span>
      <span v-else>Не выбрано</span>
    </div>
    <div class="region-dropdown__options">
      <div
        v-for="(item, index) in regions"
        :key="index"
        class="region-dropdown__options-item"
        @click="regionSelect(item)"
      >
        {{ item.title }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "regionDropdown",
  props: {
    regions: {
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
    regionSelect(region) {
      this.$emit("update:modelValue", region);
      this.handlerDropdown();
    },
    handlerDropdown() {
      this.show = !this.show;
    },
  },
};
</script>

<style lang="scss">
.region-dropdown {
  text-transform: capitalize;
  position: relative;
  cursor: pointer;
  width: 15rem;
  background-color: #cecece;
  border-radius: 6px;

  &__selected-region {
    margin: 1rem 1rem;
    span:after {
      content: "";
      background-image: url(../assets/img/arrow-down.svg);
      display: inline-block;
      position: absolute;
      transition: transform 0.5s;
      width: 2rem;
      height: 2rem;
      top: 0;
      right: 0.5rem;
      bottom: 0;
      margin: auto;
    }
  }
  &__options {
    z-index: 1;
    border-radius: 4px;
    display: none;
    position: absolute;
    margin-top: 1rem;
    height: 20rem;
    width: 100%;
    background-color: #fff;
    overflow-y: scroll;
    &-item {
      padding: 1rem 1rem;
      cursor: pointer;
      &:hover {
        color: #fff;
        background: #cecece;
      }
    }
  }

  &.active {
    .region-dropdown {
      &__selected-region span:after {
        transform: rotate(-180deg);
      }

      &__options {
        display: block;
      }
    }
  }
}
</style>
