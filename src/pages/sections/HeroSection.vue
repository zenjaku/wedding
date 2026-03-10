<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { DEFAULT_MEDIA_ASSETS, DEFAULT_PEOPLE, DEFAULT_WEDDING } from '@/props/DefaultValues';

const wedding = DEFAULT_WEDDING;
const people = DEFAULT_PEOPLE;
const mediaAssets = DEFAULT_MEDIA_ASSETS;

const groom = people.find((p) => p.id === wedding.groom_person_id);
const bride = people.find((p) => p.id === wedding.bride_person_id);
const heroImage = mediaAssets.find((m) => m.id === wedding.hero_media_id);

const showScrollHint = ref(true);

function hideScrollHint() {
    showScrollHint.value = false;
}

function onFirstScroll() {
    if (window.scrollY > 8) hideScrollHint();
}

onMounted(() => {
    // Hide only when the user actually starts scrolling/interacting.
    window.addEventListener('scroll', onFirstScroll, { passive: true });
    window.addEventListener('wheel', hideScrollHint, { passive: true });
    window.addEventListener('touchmove', hideScrollHint, { passive: true });
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', onFirstScroll);
    window.removeEventListener('wheel', hideScrollHint);
    window.removeEventListener('touchmove', hideScrollHint);
});

const formattedWeddingDate = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    hour: 'numeric',
    minute: '2-digit'
}).format(wedding.starts_at)
</script>

<template>
    <section id="hero">
        <div class="hero-container" v-reveal="'zoom'">
            <div class="hero-media" aria-hidden="true">
                <img :src="heroImage?.url" :alt="wedding.header" class="hero-image" fetchpriority="high"
                    decoding="async" />
            </div>
            <div class="hero-overlay" aria-hidden="true"></div>

            <div class="hero-content">
                <div class="hero-kicker">{{ wedding.header }}</div>
                <h1 class="hero-names">
                    <span class="hero-name">{{ groom?.display_name }}</span>
                    <span class="hero-amp">&</span>
                    <span class="hero-name">{{ bride?.display_name }}</span>
                </h1>
                <div class="hero-date">
                    <span class="hero-date__label">When</span>
                    <span class="hero-date__value">{{ formattedWeddingDate }}</span>
                </div>
            </div>

            <div v-if="showScrollHint" class="hero-scroll-hint" aria-hidden="true">
                <font-awesome-icon :icon="['fas', 'chevron-up']" class="hero-scroll-hint__icon" />
                <span class="hero-scroll-hint__text">Swipe up to explore</span>
            </div>
        </div>
    </section>
</template>
