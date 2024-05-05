<script setup>
import c3n97 from "@/Layouts/c3n97.vue";
</script>

<template>
  <c3n97>
    <a-result
        status="403"
        subtitle="Access to this resource on the server is denied."
    >
      <template #extra>
        <a-space>
          <a-button type="primary">Back</a-button>
        </a-space>
      </template>
    </a-result>
  </c3n97>
</template>
