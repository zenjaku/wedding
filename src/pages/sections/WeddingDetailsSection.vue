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
        <div class="wed-details">
            <div class="details" v-for="(card, index) in eventCards" :key="card.event.id"
                v-reveal :style="{ '--reveal-delay': `${index * 90}ms` }">
                <span class="details-title">{{ card.event.label }}</span>
                <hr>
                <p>{{ card.venue.name }}</p>
                <span class="details-time">{{ eventDateFormatter.format(getEventStartDate(card.event.starts_at_offset_minutes)) }}</span>
                <a :href="card.venue.map_url">
                    <button class="direction-btn">
                        <font-awesome-icon :icon="['fas', 'location-dot']" />
                        Google map
                    </button>
                </a>
            </div>
        </div>
    </section>
</template>
