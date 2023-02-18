<template>
  <table class="table">
    <thead>
      <tr>
        <th class="table__rank">rank</th>
        <th class="table__rating">rating</th>
        <th class="table__name">name</th>
        <th class="table__games">games</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="(item, index) in competitiveTier" :key="index">
        <tr v-for="player in item" :key="player.puuid">
          <td class="table__rank">{{ player.leaderboardRank }}</td>
          <td class="table__rating">{{ player.rankedRating }}</td>
          <td v-if="!player.IsAnonymized" class="table__name">
            {{ player.gameName }}
            <p>{{ "#" + player.tagLine }}</p>
          </td>
          <td v-else class="table__name">Secret Agent</td>
          <td class="table__games">{{ player.numberOfWins }}</td>
        </tr>
      </template>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "LeaderboardTable",
  props: {
    competitiveTier: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
tr {
  text-align: left;
}
.table {
  p {
    display: inline;
    color: grey;
  }
  text-transform: uppercase;
  width: 100%;
  &__rank {
    width: 8rem;
  }
  &__rating {
    width: 8rem;
  }
  &__name {
    width: auto;
  }
  &__games {
    width: 8rem;
  }
}
</style>
