<template>
  <div id="app">
    <div class="content-container">
      <div class="header">
            <img src="./assets/logo.png" style="width: 66px" alt="">
            <p class="small-metadata">Last updated — 1.06.2020</p>
        </div>
      <transition name="slide" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  body {
    background-color: #1A1A1A;
  }

  #app {
    font-family: 'Calibre', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    font-weight: 500;
    color: white;
    margin-top: 36px;
    text-align: left;
  }

  h1 {
    font-size: 120px;
    font-weight: 500;
    margin: 0px;
  }

  h2 {
    font-size: 36px;
    font-weight: 300;
    margin: 0px;
  }

  h3 {
    font-family: 'Founders Grotesk Condensed', sans-serif;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 20px;
    letter-spacing: 2px;
  }

  .content-container {
    max-width: 1185px;
    margin: auto;
  }

  .header {
    margin-bottom: 111px;
    display: flex;
    justify-content: space-between;
    align-content: top;
  }
  
  .small-metadata {
    color: #8A8A8A;
    font-size: 15px;
  }

  .appButton {
    font-family: 'Founders Grotesk Condensed', sans-serif;
    font-weight: 500;
    text-transform: uppercase;
    color: white;
    text-decoration: none;
    font-size: 20px;
    letter-spacing: 2px;
    border: 1px solid white;
    border-radius: 8px;
    padding: 12px;
    transition: .15s ease;
    display: inline-block;
    margin: 20px 0px;
  }

  .appButton:hover {
    background-color: white;
    color: #1A1A1A;
  }

  .slide-enter-active {
    animation: slide-in 150ms ease-out forwards;
  }
  .slide-leave-active {
    animation: slide-out 150ms ease-out forwards;
  }
  @keyframes slide-in {
    from {
      transform: translateY(-10px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  @keyframes slide-out {
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(-10px);
      opacity: 0;
    }
  }
</style>
