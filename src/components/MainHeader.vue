<template>
  <header class="header">
    <div class="container">
      <div class="content">
        <div class="links-wrap">
          <div class="logo" @click="$router.push('/')">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              fill="#000000"
              viewBox="0 0 32 32"
              id="Camada_1"
              version="1.1"
              xml:space="preserve"
            >
              <g>
                <path
                  d="M19.8,26.1h-0.2c-2.4,0-4.8,0-7.2,0c-0.3,0-0.5-0.1-0.6-0.3c-2.5-3.2-5.1-6.3-7.6-9.5C4.1,16.1,4,16,4,15.8   c0-3.1,0-6.1,0-9.2c0-0.1,0-0.2,0.1-0.2h0.1c5.2,6.5,10.4,13,15.5,19.5c0,0,0,0.1,0.1,0.1L19.8,26.1L19.8,26.1z"
                />

                <path
                  d="M27.8,16.3c-0.7,0.9-1.5,1.8-2.2,2.8c-0.2,0.2-0.4,0.3-0.6,0.3c-2.4,0-4.8,0-7.1,0c0,0-0.1,0-0.1,0c-0.1,0-0.2-0.1-0.1-0.2   c0,0,0-0.1,0.1-0.1c2.4-3,4.7-5.9,7.1-8.9c1-1.2,2-2.5,2.9-3.7c0-0.1,0.1-0.1,0.2-0.1c0,0,0.1,0,0.1,0c0,0.1,0,0.1,0,0.2   c0,3,0,6.1,0,9.1C28,16,27.9,16.2,27.8,16.3L27.8,16.3z"
                />
              </g>
            </svg>
          </div>
          <nav class="nav">
            <ul class="nav__items">
              <li class="nav__link" @click="$router.push('/leaderboard')">
                leaderboard
              </li>
            </ul>
          </nav>
        </div>
        <div class="theme">theme</div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "MainHeader",
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  max-width: 120rem;
}
.header {
  background-color: #000;
  color: #fff;
}
.content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.links-wrap {
  display: flex;
  align-items: center;
}
.logo {
  cursor: pointer;
  height: 5rem;
  margin-right: 1rem;
  svg {
    height: 100%;
    width: 100%;
    fill: #ffffff;
  }
}

.nav {
  &__items {
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
  }
  &__link {
    cursor: pointer;
    text-transform: capitalize;
  }
}
</style>
