<script setup lang="ts"></script>

<template>
  <div class="wrapper">
    <h1>One Time Pricing</h1>
    <div class="container">
      <div class="row">
        <div class="column">
          <h2>549, -</h2>
          <p>Pay now, later or split upl</p>
        </div>
      </div>
      <div class="column">
        <div class="row">
          <div class="column">
            <button type="button">BUY ONLINE</button>
            <p>18 in online storage - can be shipped today</p>
          </div>
        </div>
        <div class="row">
          <ul>
            <li>Free shipping over NOK 800</li>
            <li>Lightning fast delivery</li>
          </ul>
        </div>
        <div class="row">
          <div>
            <p>See how fast you can get the item</p>
            <div>
              <div>
                <p>icon</p>
                <input type="text" name="zipCode" id="zipCode" />
              </div>
              <button type="button">Check</button>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <button type="button">PICK UP IN STORE</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  .container {
    display: flex;
    flex-direction: column;
    color: black;
    background-color: white;
    border-radius: 1rem;
    padding: 2rem;
    gap: 2rem;
  }

  .column {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }

  .row {
    display: flex;
    flex-direction: row;
    width: 100%;
  }

  button {
    width: 100%;
  }
</style>
