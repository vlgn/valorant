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
    <LeaderboardTable :competitiveTier="competitiveTier"></LeaderboardTable>
  </main>
</template>

<script>
import RegionDropdown from "@/components/region-dropdown";
import RankDropdown from "@/components/RankDropdown";
import SeasonDropdown from "@/components/SeasonDropdown";
import LeaderboardTable from "@/components/LeaderboardTable.vue";
import unofficialValorantApi from "unofficial-valorant-api";

export default {
  name: "LeaderboardPage",
  components: {
    RegionDropdown,
    RankDropdown,
    SeasonDropdown,
    LeaderboardTable,
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
        episode: "episode 2",
        act: "act 2",
        code: "e2a1",
      },
      seasons: [
        {
          episode: "episode 6",
          act: "act 1",
          code: "e6a1",
        },
        {
          episode: "episode 5",
          act: "act 3",
          code: "e5a3",
        },
        {
          episode: "episode 5",
          act: "act 2",
          code: "e5a2",
        },
        {
          episode: "episode 5",
          act: "act 1",
          code: "e5a1",
        },
        {
          episode: "episode 4",
          act: "act 3",
          code: "e4a3",
        },
        {
          episode: "episode 4",
          act: "act 2",
          code: "e4a2",
        },
        {
          episode: "episode 4",
          act: "act 1",
          code: "e4a1",
        },
        {
          episode: "episode 3",
          act: "act 3",
          code: "e3a3",
        },
        {
          episode: "episode 3",
          act: "act 2",
          code: "e3a2",
        },
        {
          episode: "episode 3",
          act: "act 1",
          code: "e3a1",
        },
        {
          episode: "episode 2",
          act: "act 3",
          code: "e2a3",
        },
        {
          episode: "episode 2",
          act: "act 2",
          code: "e2a2",
        },
        {
          episode: "episode 2",
          act: "act 1",
          code: "e2a1",
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
      competitiveTier: {},
    };
  },
  mounted() {
    this.getTableData();
  },
  watch: {
    selectedRegion() {
      this.getTableData();
    },
    selectedSeason() {
      this.getTableData();
    },
  },
  methods: {
    async getTableData() {
      this.competitiveTier = {};
      const VAPI = new unofficialValorantApi();
      const response = await VAPI.getLeaderboard({
        version: "v1",
        region: this.selectedRegion.code,
        season: this.selectedSeason.code,
      });
      const responseObj = {};

      response.data.forEach((element) => {
        if (!responseObj[element.competitiveTier]) {
          responseObj[element.competitiveTier] = [];
        }

        responseObj[element.competitiveTier].push(element);
      });

      Object.entries(responseObj)
        .sort((a, b) => b[0] - a[0])
        .forEach((tier) => {
          this.competitiveTier[`tier-${tier[0]}`] = tier[1];
        });

      console.log(this.competitiveTier);
    },
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
  padding: 6rem;
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
