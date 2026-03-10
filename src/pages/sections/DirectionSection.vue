<script setup lang="ts">
import { DEFAULT_CAROUSEL_SLIDES, DEFAULT_DIRECTION, DEFAULT_MEDIA_ASSETS, DEFAULT_VENUES } from '@/props/DefaultValues';

const direction = DEFAULT_DIRECTION[0];
const slides = DEFAULT_CAROUSEL_SLIDES.slice(0, 2);
const venue = DEFAULT_VENUES.find((v) => v.id === direction.venue_id);
const directionImage = DEFAULT_MEDIA_ASSETS.find((m) => m.id === direction.image_media_id);

function getSlideImageUrl(imageMediaId: number) {
    return DEFAULT_MEDIA_ASSETS.find((m) => m.id === imageMediaId)?.url;
}
</script>

<template>
    <section id="direction">
        <div class="direction">
            <div class="direction-img-container">
                <img :src="directionImage?.url" :alt="direction.label" loading="lazy" decoding="async">
                <p class="direction-title">{{ venue?.name ?? direction.label }}</p>
                <a :href="venue?.map_url" target="_blank" rel="noopener noreferrer">
                    <button class="direction-btn">
                        <font-awesome-icon :icon="['fas', 'location-dot']" />
                        Get Direction
                    </button>
                </a>
            </div>
            <div v-for="(slide, index) in slides" :key="slide.id"
                :class="['side-image-container', index === 0 ? 'left' : 'right']">
                <img :src="getSlideImageUrl(slide.image_media_id)" :alt="slide.title" loading="lazy" decoding="async">
            </div>
        </div>
    </section>
</template>
