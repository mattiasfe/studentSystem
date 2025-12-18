<script setup lang="ts">
    import type { Student } from '../models/Student';

    defineProps<{
        students: Student[];
    }>();

    
</script>

<template>
    <ul>
        <li v-for="s in students" :key="s.id">
            <strong>{{ s.navn }}</strong><br>
            {{ s.epostPrivat }}<br>
            {{ s.telefon  }}<br>
            {{ s.discord }}
        </li>
    </ul>
</template>