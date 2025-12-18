<script setup lang="ts">
    import type { Student } from '../models/Student';

    defineProps<{
        students: Student[];
    }>();

    console.log(students);
</script>

<template>
    <ul>
        <li v-for="s in students" :key="s.id">
            <strong>{{ s.navn }}</strong><br>
            {{ s.epostPrivat }}<br>
            {{ s.telefon  }}
        </li>
    </ul>
</template>