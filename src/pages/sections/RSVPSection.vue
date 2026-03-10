<script setup lang="ts">

</script>
<template>
    <section id="rsvp">
        <div class="rsvp-container" v-reveal="'fade-in'" style="--reveal-delay: 60ms">
            <header class="rsvp-header">
                <h2 class="rsvp-title">RSVP</h2>
                <p class="rsvp-subtitle">Let us know if you can make it.</p>
                <div class="rsvp-rule" aria-hidden="true"></div>
            </header>

            <form class="rsvp-form">
                <div class="rsvp-field">
                    <label class="rsvp-label" for="rsvp-name">Full name</label>
                    <input id="rsvp-name" class="rsvp-input" type="text" autocomplete="name"
                        placeholder="Juan Dela Cruz">
                </div>

                <div class="rsvp-field">
                    <label class="rsvp-label" for="rsvp-email">Email</label>
                    <input id="rsvp-email" class="rsvp-input" type="email" autocomplete="email"
                        placeholder="juan@example.com">
                </div>

                <div class="rsvp-field">
                    <label class="rsvp-label" for="rsvp-attendance">Attendance</label>
                    <select id="rsvp-attendance" class="rsvp-select">
                        <option value="yes">Yes, I will attend</option>
                        <option value="no">Sorry, I can't</option>
                    </select>
                </div>

                <div class="rsvp-field">
                    <label class="rsvp-label" for="rsvp-message">Message</label>
                    <textarea id="rsvp-message" class="rsvp-textarea" rows="4"
                        placeholder="Write a short message for the couple..."></textarea>
                </div>

                <div class="rsvp-actions">
                    <button class="rsvp-btn" type="submit">Send RSVP</button>
                </div>
            </form>
        </div>
    </section>
</template>