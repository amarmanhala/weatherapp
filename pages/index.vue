<template>
  <div>
    <img src="~/assets/cloud.gif" class="w-16 h-16 absolute loader" v-if="isLoading" />
    <div
      class="container lg:px-32 xl:px-32 md:px-24 sm:px-10 px-10 xl:pt-24 lg:pt-24 md:pt-24 pt-20"
      v-if="!isLoading"
    >
      <h1 class="text-white text-3xl xl:text-5xl lg:text-5xl md:text-5xl">Toronto, {{ currentDay }}</h1>
      <h4 class="text-grey text-2xl">{{ currentSummary }}</h4>
      <div class="xl:text-7xl lg:text-7xl md:text-7xl text-5xl text-white py-4">
        <span>{{ currentTemperature }}&#730;</span>
      </div>
      <div class="flex">
        <div class="w-full border-b border-grey">
          <p class="text-white text-xl">Suggested clothes</p>
        </div>
      </div>
      <div
        class="flex border-b border-grey"
        :key="index"
        v-for="(cloth, index) in clothesCollection"
      >
        <div class="w-full text-grey xl:text-xl lg:text-xl md:text-xl text-lg py-4">{{ cloth }}</div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Footer
  },
  data() {
    return {
      currentTemperature: null,
      currentSummary: null,
      currentDay: today,
      clothesCollection: [],
      winterTemperature: 14,
      summerTemperature: 22,
      extremeWinterTemperature: 0,
      isLoading: true,
      summers: [
        "Tee",
        "Shirt",
        "Pants",
        "Shorts",
        "Skirt",
        "Sun glasses",
        "Shorts",
        "Sneakers"
      ],
      winters: [
        " Puff/down jacket | Fleece Jacket",
        "Scarf",
        "Wool legging",
        "Warm socks",
        "Beanie",
        "Boots",
        "Jeans"
      ],
      extremeWinters: ["Winter jacket ", "Hand warmers", "Snow pants"],
      rain: [
        "Rain jacket",
        "An Umberrala",
        "Ziplocks, dry sacks",
        "Leather, rubber or vinyl footwear"
      ]
    };
  },
  mounted() {
    // Call darksky api to fetch weather data.
    axios.get("/api").then(res => {
      this.isLoading = false;
      this.currentTemperature = Math.round(res.data.currently.temperature);
      this.currentSummary = res.data.currently.summary;
      this.getSuggestedClothes();
    });
  },
  methods: {
    getSuggestedClothes() {
      // Conditions for winters
      if (this.currentTemperature < this.winterTemperature) {
        this.clothesCollection = [].concat.apply([], this.winters);

        //Conditions for extreme winters
        if (this.currentTemperature <= this.extremeWinterTemperature) {
          this.clothesCollection = this.clothesCollection.concat(
            this.extremeWinters
          );
        }
      }

      // Conditions for Summers
      if (this.currentTemperature > this.summerTemperature) {
        this.clothesCollection = [].concat.apply([], this.summers);
      }
    }
  }
};
//Get current day
var currentDate = new Date();

var dayName = new Array(
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
);

var today = dayName[currentDate.getDay()];

var time = currentDate.getHours() + ":" + currentDate.getMinutes();
</script>

<style>
body {
  background-color: #000000;
}
.loader {
  top: 45%;
  left: 44%;
}
</style>
