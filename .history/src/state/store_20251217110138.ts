import { reactive } from 'vue';
import { Student } from '../models/Student';

export const state = reactive ({
    students: [] as Student[],
})