<script setup lang="ts">
import { DEFAULT_WEDDING_DETAILS } from '@/props/DefaultValues';

const details = DEFAULT_WEDDING_DETAILS;
const weddingDateFormatter = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    hour: 'numeric',
    minute: '2-digit'
});
</script>

<template>
    <section id="wedding-details">
        <div class="wed-details">
            <div class="details" v-for="detail in details" :key="detail.id">
                <span class="details-title">{{ detail.title }}</span>
                <hr>
                <p>{{ detail.name }}</p>
                <span class="details-time">{{ weddingDateFormatter.format(detail.date) }}</span>
                <a :href="detail.location">
                    <button class="direction-btn">
                        <font-awesome-icon :icon="['fas', 'location-dot']" />
                        Google map
                    </button>
                </a>
            </div>
        </div>
    </section>
</template>
