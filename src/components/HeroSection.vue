<script setup lang="ts">
import { DEFAULT_VALUES } from '@/props/DefaultValues';
const hero = DEFAULT_VALUES[0]

const formattedWeddingDate = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    hour: 'numeric',
    minute: '2-digit'
}).format(hero.wedding_date)
</script>

<template>
    <section id="hero">
        <div class="hero-container">
            <div class="hero-title">
                <div class="column">
                    <span class="title">{{ hero.header }}</span>
                    <span class="header">{{ hero.groom_name }} and {{ hero.bride_name }}</span>
                </div>
                <div>
                    <span class="details">{{ formattedWeddingDate }}</span>
                </div>
            </div>
            <div class="img-container">
                <img :src="hero.image_url" :alt="hero.header" class="image-fluid" />
            </div>
        </div>
    </section>
</template>
