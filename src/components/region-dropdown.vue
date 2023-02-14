<template>
  <div class="region-dropdown" :class="{ active: show }">
    <div class="region-dropdown__selected-region" @click="handlerDropdown()">
      <span v-if="modelValue">{{ modelValue.title }}</span>
      <span v-else>Не выбрано</span>
      <i class="uil uil-arrow-down"></i>
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
  cursor: pointer;
  position: relative;
  width: 12rem;
  &__selected-region {
    padding: 0 1rem;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  }
  &__options {
    display: none;
    position: absolute;
    top: 2rem;
    width: 100%;
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
    .region-dropdown {
      &__selected-region i {
        transform: rotate(-180deg);
      }

      &__options {
        display: block;
      }
    }
  }
}
</style>
