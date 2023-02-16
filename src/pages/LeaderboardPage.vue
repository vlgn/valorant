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
      <SeasonDropdown
        :seasons="seasons"
        v-model="selectedSeason"
      ></SeasonDropdown>
    </div>
  </main>
</template>

<script>
import RegionDropdown from "@/components/region-dropdown";
import RankDropdown from "@/components/RankDropdown";
import SeasonDropdown from "@/components/SeasonDropdown";

export default {
  name: "LeaderboardPage",
  components: {
    RegionDropdown,
    RankDropdown,
    SeasonDropdown,
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
      selectedSeason: {
        episode: "episode 1",
        act: "act 1",
        code: "e1a1",
      },
      seasons: [
        {
          episode: "episode 1",
          act: "act 1",
          code: "e1a1",
        },
        {
          episode: "episode 1",
          act: "act 2",
          code: "e1a2",
        },
        {
          episode: "episode 1",
          act: "act 3",
          code: "e1a3",
        },
        {
          episode: "episode 2",
          act: "act 1",
          code: "e2a1",
        },
        {
          episode: "episode 2",
          act: "act 2",
          code: "e2a3",
        },
      ],
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
}
</style>
