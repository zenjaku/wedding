<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import { DEFAULT_VALUES } from '@/props/DefaultValues';

const getDate = DEFAULT_VALUES[0];
const targetDate = getDate.wedding_date;

const date = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    hour: 'numeric',
    minute: '2-digit'
}).format(targetDate)

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
        <div class="countdown-container">
            <div class="background-image-container">
                <img src="https://images.pexels.com/photos/1503520/pexels-photo-1503520.jpeg" alt=""
                    class="background-image">
            </div>
            <div class="countdown">
                <div class="countdown-title">
                    COUNTDOWN
                </div>
                <span class="countdown-description">
                    The clock was ticking so fast, between thrilling moments we had never felt before.
                    We look forward to welcoming our family and friends to witness our blessed vows on this happy day.
                </span>
                <div class="date-in-blocks">
                    <div class="days">
                        <span class="title">{{ countdown.days }}</span>
                        <span class="item">Days</span>
                    </div>
                    <div class="hours">
                        <span class="title">{{ countdown.hours }}</span>
                        <span class="item">Hours</span>
                    </div>
                    <div class="minutes">
                        <span class="title">{{ countdown.minutes }}</span>
                        <span class="item">Minutes</span>
                    </div>
                    <div class="seconds">
                        <span class="title">{{ countdown.seconds }}</span>
                        <span class="item">Seconds</span>
                    </div>
                </div>
                <button class="countdown-btn">
                    Add to calendar
                </button>
            </div>
        </div>
    </section>
</template>
