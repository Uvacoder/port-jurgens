<template>
    <div>
        <h1 class="text-xl text-on-background dark:text-on-dark-background">
            {{ colorMode.preference }}
        </h1>
        <select v-model="colorMode.preference">
            <option value="dark">Dark</option>
            <option value="light">Light</option>
            <option value="system">System</option>
        </select>
    </div>
</template>

<script setup>
const colorMode = useColorMode();
</script>
