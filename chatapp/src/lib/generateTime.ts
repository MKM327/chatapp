export default function generateTime(date: string) {
    console.log(date);
    return new Date(date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}