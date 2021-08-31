<template>
  <div id="app" class="main-container">
    <div id="nav">
      <div class="menu-item">
        <router-link to="/">Home</router-link>
      </div>
      <div class="menu-item">
        <router-link to="/create">Create</router-link>
      </div>
      <div class="menu-item">
        <router-link to="/about">About</router-link>
      </div>
      <div class="menu-item">
        <router-link to="/contact">Contact</router-link>
      </div>
        
    </div>
    <router-view/>
    <div class="footer">
      <p>Copyright R: Sergiy Brovchenko</p>
      <p>tel: +380950137282</p>
    </div>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  background: #444444;
  padding: 15px;
  text-align: center;
  border-radius: 5px;

  color: white;
}

#nav .menu-item {
  display: inline-block;
  height: 40px;
  width: 150px;
  background: #ff5c16;
  border-radius: 5px;
  margin-right: 15px;
  border: solid 2px rgb(255, 255,255, 0.7);

}

#nav .menu-item:hover {
  background: rgb(255, 50, 50, 0.7);
}

#nav a {
  
  font-weight: bold;
  color: white;
  border-radius: 5px;
  line-height: 40px;

}

#nav a.router-link-exact-active {
  color: #42b983;
}

.footer {
  min-height: 100px;
  background: #222;
  color: #eadb83;
  padding: 10px 20px;
  border-radius: 5px;
}
</style>
