<template>
<router-view></router-view>
</template>

<script>
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.body.setAttribute('arco-theme', 'dark')
} else {
  document.body.removeAttribute('arco-theme');
}
</script>
