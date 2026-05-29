export function formatTaskName(name) {
    if (!name || typeof name !== 'string') return '';
    return name.trim().charAt(0).toUpperCase() + name.trim().slice(1).toLowerCase();
}


/**
 * 2. Pure Function: Calculates the completion percentage.
 */
export function calculateCompletionRate(completedCount, totalCount) {
    if (totalCount <= 0 || completedCount < 0) return 0;
    if (completedCount > totalCount) return 100;
    
    const percentage = (completedCount / totalCount) * 100;
    return Math.round(percentage);
}

export class HabitTracker {
    constructor() {
        this.streak = 0;
    }

    completeHabit(didCompleteToday) {
        if (didCompleteToday) {
            this.streak += 1;
        } else {w
            this.streak = 0; // Streak broken!
        }
        return this.streak;
    }

    reset() {
        this.streak = 0;
    }
}