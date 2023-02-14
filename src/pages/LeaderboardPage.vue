<template>
  <div class="container">
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
      <div class="filter__icon">
        <img src="../assets/radiant-badge.png" alt="rank-icon" />
      </div>
      <div class="filter__rank">
        <h2 class="filter__rank-title">leaderboard</h2>
        <h3 class="filter__rank-name">radiant</h3>
      </div>
      <div class="filter__episode">
        <h2 class="filter__episode-name">episode 1</h2>
        <h3 class="filter__act-name">act 1</h3>
      </div>
    </div>
  </div>
</template>

<script>
import RegionDropdown from "@/components/region-dropdown";

export default {
  name: "LeaderboardPage",
  components: {
    RegionDropdown,
  },
  data() {
    return {
      selectedRegion: {
        title: "europe",
        code: "eu",
      },
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

<style lang="scss">
.container {
  margin: 0 auto;
  max-width: 120rem;
}
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
  color: white;
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &__icon {
    background-color: black;
    width: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__rank {
    padding: 2rem;
    width: 80%;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-transform: uppercase;
    text-align: center;
  }
  &__rank-name {
    margin-top: 1rem;
    font-size: 4rem;
    font-weight: 700;
  }
  &__episode {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-transform: uppercase;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 15%;
  }
  &__act-name {
    margin-top: 1rem;
    font-weight: 700;
    font-size: 3rem;
  }
}
</style>
