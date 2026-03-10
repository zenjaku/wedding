<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import { DEFAULT_PEOPLE, DEFAULT_VENUES, DEFAULT_WEDDING } from '@/props/DefaultValues';

const targetDate = DEFAULT_WEDDING.starts_at;
const wedding = DEFAULT_WEDDING;
const groom = DEFAULT_PEOPLE.find((p) => p.id === wedding.groom_person_id);
const bride = DEFAULT_PEOPLE.find((p) => p.id === wedding.bride_person_id);
const ceremonyVenue = DEFAULT_VENUES[0];

const calendarActionsOpen = ref(false);

function pad2(value: number) {
    return String(value).padStart(2, '0');
}

function toIcsUtc(date: Date) {
    return [
        date.getUTCFullYear(),
        pad2(date.getUTCMonth() + 1),
        pad2(date.getUTCDate()),
        'T',
        pad2(date.getUTCHours()),
        pad2(date.getUTCMinutes()),
        pad2(date.getUTCSeconds()),
        'Z'
    ].join('');
}

function escapeIcsText(value: string) {
    return value
        .replace(/\\/g, '\\\\')
        .replace(/;/g, '\\;')
        .replace(/,/g, '\\,')
        .replace(/\n/g, '\\n');
}

function buildWeddingEvent() {
    const title = `${groom?.display_name ?? 'Groom'} & ${bride?.display_name ?? 'Bride'} Wedding`;
    const start = targetDate;
    const end = new Date(start.getTime() + 60 * 60_000);
    const location = ceremonyVenue?.name ?? '';
    const url = ceremonyVenue?.map_url ?? '';
    const details = url ? `Map: ${url}` : '';

    return { title, start, end, location, url, details };
}

function downloadIcs() {
    const { title, start, end, location, url, details } = buildWeddingEvent();
    const uid = `wedding-${wedding.id}-${start.getTime()}@wed-app`;
    const dtstamp = toIcsUtc(new Date());

    const ics = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//wed-app//EN',
        'CALSCALE:GREGORIAN',
        'METHOD:PUBLISH',
        'BEGIN:VEVENT',
        `UID:${uid}`,
        `DTSTAMP:${dtstamp}`,
        `DTSTART:${toIcsUtc(start)}`,
        `DTEND:${toIcsUtc(end)}`,
        `SUMMARY:${escapeIcsText(title)}`,
        `LOCATION:${escapeIcsText(location)}`,
        details ? `DESCRIPTION:${escapeIcsText(details)}` : undefined,
        url ? `URL:${escapeIcsText(url)}` : undefined,
        'END:VEVENT',
        'END:VCALENDAR',
    ].filter(Boolean).join('\r\n');

    const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
    const objectUrl = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = objectUrl;
    a.download = 'wedding.ics';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(objectUrl);

    calendarActionsOpen.value = false;
}

function openGoogleCalendar() {
    const { title, start, end, location, details, url } = buildWeddingEvent();
    const dates = `${toIcsUtc(start)}/${toIcsUtc(end)}`;

    const params = new URLSearchParams({
        action: 'TEMPLATE',
        text: title,
        dates,
        location,
        details,
    });

    if (url) params.set('sprop', url);

    window.open(`https://calendar.google.com/calendar/render?${params.toString()}`, '_blank', 'noopener');
    calendarActionsOpen.value = false;
}

const now = ref(Date.now());
let countdownInterval: ReturnType<typeof setInterval> | null = null;

const countdown = computed(() => {
    const diff = Math.max(targetDate.getTime() - now.value, 0);

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    return { days, hours, minutes, seconds };
});

onMounted(() => {
    countdownInterval = setInterval(() => {
        now.value = Date.now();
    }, 1000);
});

onBeforeUnmount(() => {
    if (!countdownInterval) return;
    clearInterval(countdownInterval);
});
</script>

<template>
    <section id="countdown">
        <div class="countdown-container" v-reveal>
            <div class="background-image-container">
                <img src="https://images.pexels.com/photos/1503520/pexels-photo-1503520.jpeg" alt=""
                    class="background-image">
            </div>
            <div class="countdown" v-reveal="'fade-in'" style="--reveal-delay: 60ms">
                <div class="countdown-title">
                    COUNTDOWN
                </div>
                <span class="countdown-description">
                    The clock was ticking so fast, between thrilling moments we had never felt before.
                    We look forward to welcoming our family and friends to witness our blessed vows on this happy day.
                </span>
                <div class="date-in-blocks">
                    <div class="days" v-reveal :style="{ '--reveal-delay': '140ms' }">
                        <span class="title">{{ countdown.days }}</span>
                        <span class="item">Days</span>
                    </div>
                    <div class="hours" v-reveal :style="{ '--reveal-delay': '220ms' }">
                        <span class="title">{{ countdown.hours }}</span>
                        <span class="item">Hours</span>
                    </div>
                    <div class="minutes" v-reveal :style="{ '--reveal-delay': '300ms' }">
                        <span class="title">{{ countdown.minutes }}</span>
                        <span class="item">Minutes</span>
                    </div>
                    <div class="seconds" v-reveal :style="{ '--reveal-delay': '380ms' }">
                        <span class="title">{{ countdown.seconds }}</span>
                        <span class="item">Seconds</span>
                    </div>
                </div>
                <button class="countdown-btn" type="button" @click="calendarActionsOpen = !calendarActionsOpen">
                    Add to calendar
                </button>
                <Transition name="calendar-actions">
                    <div v-if="calendarActionsOpen" class="calendar-actions">
                        <button type="button" class="calendar-action" @click="downloadIcs">Download .ics</button>
                        <button type="button" class="calendar-action" @click="openGoogleCalendar">Google Calendar</button>
                    </div>
                </Transition>
            </div>
        </div>
    </section>
</template>
