export function formatTaskName(name) {
    if (!name || typeof name !== 'string') return '';
    return name.trim().charAt(0).toUpperCase() + name.trim().slice(1).toLowerCase();
}
