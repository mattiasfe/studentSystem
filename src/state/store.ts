import { reactive } from 'vue';
import type { Student } from '../models/Student';

export const state = reactive ({
    students: [] as Student[],
})