<script setup lang="ts">
    import type { Student } from '../models/Student';

    defineProps<{
        students: Student[];
    }>();
</script>

<template>
    <ul>
        <li v-for="s in students" : key="s.id">
            <strong>{{ s.navn }}</strong>
            <div>{{ s.epostPrivat }}</div>
            <div>{{ s.telefon  }}</div>
        </li>
    </ul>
</template>