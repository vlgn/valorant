<template>
  <table class="table">
    <thead>
      <tr>
        <th class="table__rank">rank</th>
        <th class="table__rating">rating</th>
        <th class="table__name">name</th>
        <th class="table__games">wins</th>
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
          <td class="table__games">
            <p class="wrap">
              <span class="table__games-count"> {{ player.numberOfWins }}</span>
              <span class="table__games-label">games won</span>
            </p>
          </td>
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
.table {
  text-transform: uppercase;
  width: 100%;
  text-align: center;

  td {
    padding: 1rem;
    background-color: #cecece;
  }
  thead {
    font-weight: 700;
  }

  p {
    display: inline;
    color: grey;
  }

  &__rank {
    width: 11.4rem;
  }
  &__rating {
    width: 8rem;
  }
  &__name {
    width: auto;
    text-align: left;
  }
  &__games {
    width: 15.5rem;
    &-count {
      color: #000;
    }
    &-label {
      margin-left: 0.5rem;
    }
  }
}
</style>
