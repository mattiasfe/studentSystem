<script setup lang="ts">
    import { onMounted } from 'vue';
    import { getEvents } from '../api/eventsApi';
    import { applyEvents } from '../state/eventReducer';
    import { state } from '../state/store';
    import StudentList from '../components/StudentList.vue';

    onMounted(async () => {
        const data = await getEvents();
        applyEvents(data.events);
    });
</script>

<template>
    <StudentList :students="state.students" />
</template>