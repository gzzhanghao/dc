<template>
  <div class="container">
    <SideBar class="sidebar" />
    <div class="content">
      content
    </div>
  </div>
</template>

<script>
import SideBar from './components/SideBar'

export default {
  components: { SideBar },
}
</script>

<style>
body {
  margin: 0;
}
.container {
  display: flex;
}
.sidebar {
  flex: 0 0 auto;
}
.content {
  flex: 1 1 auto;
}
</style>
