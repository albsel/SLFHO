<template>
  <div class="min-h-screen bg-gradient-to-b from-green-50 via-white to-gray-50">
    <!-- Hero + Spendenbarometer -->
    <HeroBarometer 
      :current-amount="currentAmount" 
      :target-amount="targetAmount"
    />

    <!-- Spendenformular -->
    <DonationForm 
      @donation-submitted="handleDonation"
      :show-thank-you="showThankYou"
    />

    <!-- FAQ-Bereich -->
    <FAQ />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import HeroBarometer from './components/HeroBarometer.vue'
import DonationForm from './components/DonationForm.vue'
import FAQ from './components/FAQ.vue'

const currentAmount = ref(4200)
const targetAmount = 10000
const showThankYou = ref(false)

const handleDonation = (amount) => {
  currentAmount.value += amount
  showThankYou.value = true
  
  // Scroll to top to show updated barometer
  window.scrollTo({ top: 0, behavior: 'smooth' })
  
  // Hide thank you message after 5 seconds
  setTimeout(() => {
    showThankYou.value = false
  }, 5000)
}
</script>

