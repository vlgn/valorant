<template>
  <div class="region-dropdown">
    <div @click="isDropdownVisible()" class="region-dropdown__selected-region">
      <span>{{ selectedRegion }}</span>
      <i class="uil uil-arrow-down"></i>
    </div>
    <div :class="{ active: show }" class="region-dropdown__options">
      <div
        v-for="(item, index) in regions"
        :key="index"
        @click="regionSelect(item.title)"
        class="region-dropdown__options-item"
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
    regions: Object,
    // default() {
    //   return { title: "europe" };
    // },
  },
  data() {
    return {
      selectedRegion: "europe",
      show: false,
    };
  },
  methods: {
    regionSelect(region) {
      this.selectedRegion = region;
      this.show = !this.show;
    },
    isDropdownVisible() {
      this.show = !this.show;
    },
  },
};
</script>

<style lang="scss">
.region-dropdown {
  cursor: pointer;
  background-color: green;
  position: relative;
  width: 12rem;
  &__selected-region {
    padding: 0 1rem;
    position: absolute;
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
  .active {
    display: block;
    .region-dropdown__selected-region i {
      transform: rotate(-180deg);
    }
  }
}
</style>
