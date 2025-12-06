<template>
  <section class="py-16 px-4 bg-white">
    <div class="max-w-2xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
        Jetzt spenden
      </h2>

      <!-- Thank You Message -->
      <div 
        v-if="showThankYou"
        class="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg"
      >
        <p class="font-semibold text-lg">Vielen Dank für Ihre Spende! 🎉</p>
        <p class="text-sm mt-1">Ihr Beitrag hilft uns, unser Ziel zu erreichen.</p>
      </div>

      <form @submit.prevent="handleSubmit" class="bg-gray-50 rounded-lg p-6 md:p-8 shadow-md">
        <!-- Name Field -->
        <div class="mb-6">
          <label for="name" class="block text-gray-700 font-semibold mb-2">
            Name <span class="text-red-500">*</span>
          </label>
          <input
            id="name"
            v-model="form.name"
            type="text"
            class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            :class="{ 'border-red-500': errors.name }"
            placeholder="Ihr vollständiger Name"
            @blur="validateName"
          />
          <p v-if="errors.name" class="text-red-500 text-sm mt-1">{{ errors.name }}</p>
        </div>

        <!-- Email Field -->
        <div class="mb-6">
          <label for="email" class="block text-gray-700 font-semibold mb-2">
            E-Mail <span class="text-red-500">*</span>
          </label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            :class="{ 'border-red-500': errors.email }"
            placeholder="ihre.email@beispiel.de"
            @blur="validateEmail"
          />
          <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
        </div>

        <!-- Amount Field -->
        <div class="mb-6">
          <label for="amount" class="block text-gray-700 font-semibold mb-2">
            Spendenbetrag (€) <span class="text-red-500">*</span>
          </label>
          <input
            id="amount"
            v-model.number="form.amount"
            type="number"
            min="5"
            step="0.01"
            class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            :class="{ 'border-red-500': errors.amount }"
            placeholder="5.00"
          />
          <p v-if="errors.amount" class="text-red-500 text-sm mt-1">{{ errors.amount }}</p>
          <p class="text-gray-500 text-sm mt-1">Mindestbetrag: 5,00 €</p>
        </div>

        <!-- Newsletter Checkbox -->
        <div class="mb-6">
          <label class="flex items-center cursor-pointer">
            <input
              v-model="form.newsletter"
              type="checkbox"
              class="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span class="ml-3 text-gray-700">
              Ich möchte den Newsletter erhalten und über aktuelle Projekte informiert werden
            </span>
          </label>
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-transform"
        >
          Spende absenden
        </button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'

const props = defineProps({
  showThankYou: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['donation-submitted'])

const form = reactive({
  name: '',
  email: '',
  amount: null,
  newsletter: false
})

const errors = reactive({
  name: '',
  email: '',
  amount: ''
})

const validateName = () => {
  if (!form.name.trim()) {
    errors.name = 'Bitte geben Sie Ihren Namen ein.'
    return false
  }
  if (form.name.trim().length < 2) {
    errors.name = 'Der Name muss mindestens 2 Zeichen lang sein.'
    return false
  }
  errors.name = ''
  return true
}

const validateEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!form.email.trim()) {
    errors.email = 'Bitte geben Sie Ihre E-Mail-Adresse ein.'
    return false
  }
  if (!emailRegex.test(form.email)) {
    errors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.'
    return false
  }
  errors.email = ''
  return true
}

const validateAmount = () => {
  if (!form.amount || form.amount === null) {
    errors.amount = 'Bitte geben Sie einen Spendenbetrag ein.'
    return false
  }
  if (form.amount < 5) {
    errors.amount = 'Der Mindestbetrag beträgt 5,00 €.'
    return false
  }
  errors.amount = ''
  return true
}

const handleSubmit = () => {
  const isNameValid = validateName()
  const isEmailValid = validateEmail()
  const isAmountValid = validateAmount()

  if (isNameValid && isEmailValid && isAmountValid) {
    emit('donation-submitted', form.amount)
    
    // Reset form
    form.name = ''
    form.email = ''
    form.amount = null
    form.newsletter = false
    errors.name = ''
    errors.email = ''
    errors.amount = ''
  }
}
</script>

