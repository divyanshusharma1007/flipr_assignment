<script>
import axios from 'axios';
import { reactive, toRaw } from 'vue';

export default {
  data() {
    return {
      prizes: [],
      filteredPrizes: [],
      categories: [],
      years: [],
      selectedCategory: '',
      selectedYear: '',
      multipleTimeWinners: [],
    };
  },
  mounted() {
    this.fetchPrizes();
  },
  methods: {
    async fetchPrizes() {
      try {
        const response = await axios.get(' http://api.nobelprize.org/v1/prize.json');
        this.prizes = toRaw(response.data.prizes);
        this.filterData();
      } catch (error) {
        console.error(error);
      }
    },
    filterData() {
      const processedData = [];

      this.filteredPrizes = this.prizes.filter((prize) => {
        console.log((this.selectedCategory),this.selectedYear)
        const isCategoryMatch = !this.selectedCategory || prize.category === this.selectedCategory;
        const isYearMatch = !this.selectedYear || prize.year == this.selectedYear;
        return isCategoryMatch && isYearMatch;
      });

      toRaw(this.filteredPrizes).forEach(prize => {
        if (prize.laureates) {
          prize.laureates.forEach(val => {
            val.year = prize.year;
            val.category = prize.category;
            processedData.push(val);
          });
        }
      });

      this.filteredPrizes = processedData;

      this.categories = Array.from(new Set(this.prizes.map((prize) => prize.category)));
      this.years = Array.from(new Set(this.prizes.map((prize) => parseInt(prize.year))));

      const laureateCounts = {};

      for (let i = 0; i < this.prizes.length; i++) {
        const prize = this.prizes[i];

        for (let j = 0; j < (prize.laureates?.length || 0); j++) {
          const laureate = prize.laureates[j];

          if (laureateCounts[laureate.id]) {
            laureateCounts[laureate.id]++;
          } else {
            laureateCounts[laureate.id] = 1;
          }
        }
      }

      this.multipleTimeWinners = Object.keys(laureateCounts)
        .filter((laureateId) => laureateCounts[laureateId] > 1)
        .map((laureateId) => {
          const laureate = this.prizes
            .flatMap((prize) => prize.laureates)
            .find((laureate) => laureate && laureate.firstname && laureate.id === laureateId);
          return {
            id: laureate.id,
            firstName: laureate.firstname,
            surName: laureate.surname,
            wonTimes: laureateCounts[laureateId],
          };
        });
    },
  },
};


</script>
<template>
  <div>
    <!-- Header Section -->
    <div class=" text-3xl font-bold mt-5  mx-5 md:mx-10 text-slate-700 shadow-lg  p-4 bg-gradient-to-r from-teal-400 to-purple-500 rounded-md">

    
    <h1 class="">
      Nobel Prize Winners
    </h1>
    <h3 class="text-sm">Data base of Nobel price winners from {{ years[0] }}- {{ years[years.length-1] }}</h3>
  </div>
    <!-- Table of the data -->
    <div class="bg-gradient-to-r from-white via-purple-100 to-purple-200 mt-5 p-6 shadow-md mb-8 mx-5 md:mx-10 overflow-x-auto rounded-md">
      <h3 class="my-3  text-md font-sans mb-5 text-slate-700 font-bold ">Who won the Prize more than 1 times</h3>
      <table class="w-full table-auto">
        <thead>
          <tr class="bg-gray-200">
            <th class="px-4 py-2">ID</th>
            <th class="px-4 py-2">First Name</th>
            <th class="px-4 py-2">Surname</th>
            <th class="px-4 py-2">Won Time</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-t" v-for="winner in multipleTimeWinners" :key="winner.id">
            <td class="px-4 py-2 text-center">{{ winner.id }}</td>
            <td class="px-4 py-2 text-center">{{ winner.firstName }}</td>
            <td class="px-4 py-2 text-center">{{ winner.surName || '-' }}</td>
            <td class="px-4 py-2 text-center">{{ winner.wonTimes }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Filter Section -->
    <div class=" mx-5 md:mx-10 mt-8  bg-gradient-to-r from-slate-50 to-purple-200 px-5 py-5 rounded-lg shadow-lg">
      <h1 class="my-3  text-md font-sans mb-5 text-slate-700 font-bold">Let's Go Through the Filters</h1>
      <div class="flex w-full justify-between space-x-4">
        <div class="w-1/4">
          <label for="year" class="block text-sm font-medium text-gray-700">Year:</label>
          <select
            id="year"
            name="year"
            v-model="selectedYear"
            @change="filterData"
            class="mt-1 block w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value="">All</option>
            <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
          </select>
        </div>

        <div class="w-1/4">
          <label for="category" class="block text-sm font-medium text-gray-700">Category:</label>
          <select
            id="category"
            name="category"
            v-model="selectedCategory"
            @change="filterData"
            class="mt-1 block w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value="">All</option>
            <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Prize Table -->
    <div class="bg-gradient-to-r from-white via-purple-100 to-purple-200 mt-5 shadow-md mb-8 mx-5 md:mx-10 overflow-x-auto rounded-md ">
      <table class="w-full table-auto">
        <thead>
          <tr class="bg-gray-200">
            <th class="px-4 py-2">ID</th>
            <th class="px-4 py-2">First Name</th>
            <th class="px-4 py-2">Surname</th>
            <th class="px-4 py-2">Category</th>
            <th class="px-4 py-2">Motivation</th>
            <th class="px-4 py-2">Year</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-t" v-for="prize in filteredPrizes" :key="prize.id">
            <td class="px-4 py-2 text-center">{{ prize.id }}</td>
            <td class="px-4 py-2 text-center">{{ prize.firstname }}</td>
            <td class="px-4 py-2 text-center">{{ prize.surname }}</td>
            <td class="px-4 py-2 text-center">{{ prize.category }}</td>
            <td class="px-4 py-2 text-center">{{ prize.motivation.replace('"', ' ').replace('\\', ' ').replace('""',"") }}</td>
            <td class="px-4 py-2 text-center w-[50%]">{{ prize.year }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>



<style scoped></style>
