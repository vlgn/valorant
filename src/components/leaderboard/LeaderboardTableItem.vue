<template>
  <li class="table-item" v-for="playerData in item" :key="playerData.puuid">
    <span class="table-item__rank">{{ playerData.leaderboardRank }}</span>
    <div class="table-item__player-wrap">
      <span class="table-item__rating">{{ playerData.rankedRating }}</span>
      <div class="table-item__name-wrap" v-if="!playerData.IsAnonymized">
        <span class="table-item__name">{{ playerData.gameName }}</span>
        <span class="table-item__tag">{{ "#" + playerData.tagLine }}</span>
      </div>
      <div class="table-item__name-wrap" v-else>
        <span class="table-item__name">Secret Agent</span>
      </div>
    </div>
    <div class="table-item__wins-wrap">
      <span class="table-item__wins-value">{{ playerData.numberOfWins }}</span>
      <span class="table-item__wins-label">games won</span>
    </div>
  </li>
</template>

<script>
export default {
  name: "LeaderboardTableItem",

  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.table-item {
  display: flex;
  &__rank {
    width: 15%;
  }
  &__rating {
    width: 20%;
  }
  &__player-wrap {
    display: flex;
    width: 65%;
  }
  &__name-wrap {
    display: block;
  }
  &__wins-wrap {
    width: 20%;
    display: flex;
    justify-content: center;
  }
  &__tag {
    margin-left: 0.5rem;
  }
  &__wins-label {
    margin-left: 0.5rem;
  }
}
</style>
