<script setup lang="ts">
import { DEFAULT_VENUES, DEFAULT_WEDDING, DEFAULT_WEDDING_EVENTS } from '@/props/DefaultValues';

const events = DEFAULT_WEDDING_EVENTS;
const venues = DEFAULT_VENUES;
const weddingStart = DEFAULT_WEDDING.starts_at;

const venuesById = new Map(venues.map((venue) => [venue.id, venue]));

function getEventStartDate(startsAtOffsetMinutes: number) {
    return new Date(weddingStart.getTime() + startsAtOffsetMinutes * 60_000);
}

type EventCard = {
    event: (typeof events)[number];
    venue: (typeof venues)[number];
};

const eventCards = events
    .map((event) => ({ event, venue: venuesById.get(event.venue_id) }))
    .filter((card): card is EventCard => Boolean(card.venue));

const eventDateFormatter = new Intl.DateTimeFormat('en-US', {
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
        <div class="wed-details" v-reveal>
            <header class="wed-details-header" v-reveal="'fade-in'" style="--reveal-delay: 40ms">
                <h2 class="wed-details-title">Wedding Schedule</h2>
                <p class="wed-details-subtitle">Time, place, and directions for the day.</p>
            </header>

            <div class="wed-details-grid">
                <article class="wed-details-card" v-for="(card, index) in eventCards" :key="card.event.id"
                    v-reveal="'pop'" :style="{ '--reveal-delay': `${120 + (index * 90)}ms` }">
                    <div class="wed-details-card__top">
                        <span class="wed-details-label">{{ card.event.label }}</span>
                        <span class="wed-details-time">{{ eventDateFormatter.format(getEventStartDate(card.event.starts_at_offset_minutes)) }}</span>
                    </div>

                    <div class="wed-details-venue">{{ card.venue.name }}</div>

                    <div class="wed-details-actions">
                        <a :href="card.venue.map_url" target="_blank" rel="noopener noreferrer">
                            <button class="direction-btn" type="button">
                                <font-awesome-icon :icon="['fas', 'location-dot']" />
                                Google map
                            </button>
                        </a>
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>
