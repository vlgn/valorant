<template>
  <main class="container">
    <div class="search">
      <div class="search__input">
        <input type="text" placeholder="Playername#Tag" class="search__input" />
        <i class="uil uil-search"></i>
      </div>
      <RegionDropdown
        v-model="selectedRegion"
        :regions="regions"
      ></RegionDropdown>
    </div>
    <div class="filter">
      <img
        class="filter__icon"
        src="../assets/radiant-badge.png"
        alt="rank-icon"
      />

      <RankDropdown :ranks="ranks" v-model="selectedRank"></RankDropdown>
      <div class="filter__episode">
        <h2 class="filter__episode-name">episode 1</h2>
        <h3 class="filter__act-name">act 1</h3>
      </div>
    </div>
  </main>
</template>

<script>
import RegionDropdown from "@/components/region-dropdown";
import RankDropdown from "@/components/RankDropdown.vue";

export default {
  name: "LeaderboardPage",
  components: {
    RegionDropdown,
    RankDropdown,
  },
  data() {
    return {
      selectedRegion: {
        title: "europe",
        code: "eu",
      },
      selectedRank: {
        title: "radiant",
      },
      ranks: [
        {
          title: "radiant",
        },
        {
          title: "immortal 3",
        },
        {
          title: "immortal 2",
        },
        {
          title: "immortal 1",
        },
      ],
      regions: [
        {
          title: "europe",
          code: "eu",
        },
        {
          title: "north america",
          code: "na",
        },
        {
          title: "asia pacific",
          code: "ap",
        },
        {
          title: "korea",
          code: "kr",
        },
        {
          title: "brazil",
          code: "br",
        },
        {
          title: "latin america",
          code: "latam",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.title {
  text-align: center;
  font-weight: bold;
  font-size: 4rem;
}
.search {
  margin-top: 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  &__input {
    input {
      padding: 1rem 0.5rem;
      max-width: 14rem;
    }
    input::placeholder {
      color: grey;
    }
    i {
      cursor: pointer;
      font-weight: bold;
    }
  }
}
.filter {
  padding: 2rem;
  height: 10rem;
  color: white;
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__episode {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-transform: uppercase;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
}
</style>
