<template>
    <section id="donate-section" class="py-section bg-white">
      <div class="container max-w-2xl">
        <!-- Header -->
        <div class="text-center mb-10">
          <div class="inline-flex items-center justify-center w-16 h-16 bg-brand-primary/10 rounded-full mb-4">
            <svg class="w-8 h-8 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
            </svg>
          </div>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Jetzt spenden</h2>
          <p class="text-gray-600 text-lg">Jeder Beitrag hilft uns, die Natur zu schützen und zu bewahren</p>
        </div>
  
        <!-- Thank You Message -->
        <transition
          enter-active-class="transition-all duration-500 ease-out"
          enter-from-class="opacity-0 -translate-y-5"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition-all duration-400 ease-in"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-3"
        >
          <div
            v-if="showThankYou"
            class="mb-6 p-6 bg-gradient-to-r from-brand-primary/5 to-brand-secondary/5 border border-brand-primaryLight rounded-xl shadow-lg"
          >
            <div class="flex items-start">
              <div class="w-12 h-12 bg-brand-success rounded-full flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div class="ml-4">
                <p class="font-bold text-xl text-brand-primaryDark">Vielen Dank für Ihre Spende! 🎉</p>
                <p class="text-sm mt-1 text-brand-primaryDark/80">Ihr Beitrag hilft uns, unser Ziel zu erreichen.</p>
              </div>
            </div>
          </div>
        </transition>
  
        <!-- Form -->
        <form
          @submit.prevent="handleSubmit"
          class="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-gray-100"
        >
          <!-- Name -->
          <div class="mb-6">
            <label for="name" class="block text-gray-700 font-semibold mb-2">
              <span class="flex items-center">
                <svg class="w-5 h-5 mr-2 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                Name <span class="text-brand-error ml-1">*</span>
              </span>
            </label>
  
            <input
              id="name"
              v-model="form.name"
              type="text"
              class="w-full px-4 py-3 border rounded-lg transition-all duration-300 focus:outline-none focus:ring-0 focus:border-brand-primary"
              :class="{ 'border-brand-errorLight focus:border-brand-errorLight': errors.name, 'border-gray-300': !errors.name }"
              placeholder="Ihr vollständiger Name"
              @blur="validateName"
            />
  
            <p v-if="errors.name" class="text-brand-error text-sm mt-2 flex items-center">
              <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
              {{ errors.name }}
            </p>
          </div>
  
          <!-- Email -->
          <div class="mb-6">
            <label for="email" class="block text-gray-700 font-semibold mb-2">
              <span class="flex items-center">
                <svg class="w-5 h-5 mr-2 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                E-Mail <span class="text-brand-error ml-1">*</span>
              </span>
            </label>
  
            <input
              id="email"
              v-model="form.email"
              type="email"
              class="w-full px-4 py-3 border rounded-lg transition-all duration-300 focus:outline-none focus:ring-0 focus:border-brand-primary"
              :class="{ 'border-brand-errorLight focus:border-brand-errorLight': errors.email, 'border-gray-300': !errors.email }"
              placeholder="ihre.email@beispiel.de"
              @blur="validateEmail"
            />
  
            <p v-if="errors.email" class="text-brand-error text-sm mt-2 flex items-center">
              <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
              {{ errors.email }}
            </p>
          </div>
  
          <!-- Amount -->
          <div class="mb-6">
            <label for="amount" class="block text-gray-700 font-semibold mb-3">
              <span class="flex items-center">
                <svg class="w-5 h-5 mr-2 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Spendenbetrag (€) <span class="text-brand-error ml-1">*</span>
              </span>
            </label>
  
            <!-- Preset Buttons -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
              <button
                v-for="quickAmount in [10, 25, 50, 100]"
                :key="quickAmount"
                type="button"
                @click="setQuickAmount(quickAmount)"
                class="px-4 py-2 border rounded-lg font-semibold transition transform duration-200"
                :class="form.amount === quickAmount
                  ? 'bg-brand-primaryDark text-white border-brand-primary shadow-md scale-105'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-brand-primaryLight hover:bg-brand-primary/10 hover:scale-105'"
              >
                {{ quickAmount }} €
              </button>
            </div>
  
            <!-- Custom Amount -->
            <div class="relative">
              <span class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-semibold">€</span>
  
              <input
                id="amount"
                v-model.number="form.amount"
                type="number"
                min="5"
                step="0.01"
                class="w-full pl-10 pr-4 py-3 border rounded-lg transition-all duration-300 focus:outline-none focus:ring-0 focus:border-brand-primary"
                :class="{ 'border-brand-errorLight focus:border-brand-errorLight': errors.amount, 'border-gray-300': !errors.amount }"
                placeholder="5.00"
              />
            </div>
  
            <p v-if="errors.amount" class="text-brand-error text-sm mt-2 flex items-center">
              <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
              {{ errors.amount }}
            </p>
  
            <p class="text-gray-500 text-sm mt-2 flex items-center">
              <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Mindestbetrag: 5,00 €
            </p>
          </div>
  
          <!-- Newsletter -->
          <div class="mb-6">
            <label class="flex items-center cursor-pointer">
              <input
                v-model="form.newsletter"
                type="checkbox"
                class="w-5 h-5 text-brand-primary border-gray-300 rounded focus:ring-brand-primary"
              />
              <span class="ml-3 text-gray-700">Ich möchte den Newsletter erhalten…</span>
            </label>
          </div>
  
          <!-- Submit -->
          <button
            type="submit"
            :disabled="isSubmitting"
            class="w-full bg-gradient-to-r from-brand-primaryDark to-brand-secondaryDark hover:from-brand-primaryDark/90 hover:to-brand-secondaryDark/90 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            <!-- Loader -->
            <svg
              v-if="isSubmitting"
              class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
  
            <!-- Default -->
            <span v-if="!isSubmitting" class="flex items-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
              </svg>
              Spende absenden
            </span>
  
            <span v-else>Wird verarbeitet...</span>
          </button>
        </form>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, reactive } from "vue";
  
  const props = defineProps({
    showThankYou: { type: Boolean, default: false }
  });
  
  const emit = defineEmits(["donation-submitted"]);
  
  const isSubmitting = ref(false);
  
  const form = reactive({
    name: "",
    email: "",
    amount: null,
    newsletter: false
  });
  
  const errors = reactive({
    name: "",
    email: "",
    amount: ""
  });
  
  const setQuickAmount = (amount) => {
    form.amount = amount;
    errors.amount = "";
  };
  
  const validateName = () => {
    if (!form.name.trim()) {
      errors.name = "Bitte geben Sie Ihren Namen ein.";
      return false;
    }
    if (form.name.trim().length < 2) {
      errors.name = "Der Name muss mindestens 2 Zeichen lang sein.";
      return false;
    }
    errors.name = "";
    return true;
  };
  
  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) {
      errors.email = "Bitte geben Sie Ihre E-Mail-Adresse ein.";
      return false;
    }
    if (!emailRegex.test(form.email)) {
      errors.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
      return false;
    }
    errors.email = "";
    return true;
  };
  
  const validateAmount = () => {
    if (!form.amount) {
      errors.amount = "Bitte geben Sie einen Spendenbetrag ein.";
      return false;
    }
    if (form.amount < 5) {
      errors.amount = "Der Mindestbetrag beträgt 5,00 €.";
      return false;
    }
    errors.amount = "";
    return true;
  };
  
  const handleSubmit = async () => {
    const ok = validateName() & validateEmail() & validateAmount();
    if (!ok) return;
  
    isSubmitting.value = true;
    await new Promise((r) => setTimeout(r, 800));
  
    emit("donation-submitted", form.amount);
  
    form.name = "";
    form.email = "";
    form.amount = null;
    form.newsletter = false;
  
    errors.name = "";
    errors.email = "";
    errors.amount = "";
  
    isSubmitting.value = false;
  };
  </script>
  