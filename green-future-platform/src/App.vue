<template>
  <div id="app">
    <Header />
    <main class="min-h-screen">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style src="@/assets/styles/main.css"></style>