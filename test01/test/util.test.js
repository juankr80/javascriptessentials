import { describe, test, expect, beforeEach } from 'vitest';
import { 
    formatTaskName, 
    calculateCompletionRate,     
    HabitTracker 
} from './src/utils.js';

// --- Group 1: String Formatting ---
describe('formatTaskName()', () => {
    test('should capitalize the first letter and lowercase the rest', () => {
        expect(formatTaskName('jAVasCrIpt')).toBe('Javascript');
    });

    test('should trim whitespace from edges', () => {
        expect(formatTaskName('  read a book   ')).toBe('Read a book');
    });

    test('should return an empty string if input is invalid', () => {
        expect(formatTaskName(null)).toBe('');
        expect(formatTaskName(123)).toBe('');
    });
});