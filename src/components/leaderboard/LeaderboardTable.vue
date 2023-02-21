<template>
  <div class="table">
    <header class="table__header">
      <div class="table__rank">rank</div>
      <div class="table__rating">
        <span>rating</span>
      </div>
      <div class="table__games-count">wins</div>
    </header>
    <main class="table__main">
      <ul class="table__leaderboard-list">
        <template v-for="(item, index) in competitiveTier" :key="index">
          <LeaderboardTableItem :item="item"></LeaderboardTableItem>
        </template>
      </ul>
    </main>
  </div>
</template>

<script>
import LeaderboardTableItem from "@/components/leaderboard/LeaderboardTableItem.vue";

export default {
  name: "LeaderboardTable",
  components: {
    LeaderboardTableItem,
  },
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
  &__header {
    display: flex;
  }
  &__rank {
    width: 15%;
  }
  &__rating {
    width: 65%;
    display: flex;
    span {
      width: 20%;
    }
  }
  &__games-count {
    width: 20%;
  }
}
</style>
