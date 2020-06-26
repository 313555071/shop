<template>
  <div>
    <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/admin/products">Dashboard</router-link>
    </div>
    <router-view />
  </div>
</template>
