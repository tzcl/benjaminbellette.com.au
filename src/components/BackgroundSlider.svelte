<script lang="ts">
  // import Swiper core and required modules
  import { Navigation, Pagination, A11y } from "swiper";

  import { Swiper, SwiperSlide } from "swiper/svelte";

  // Import Swiper styles
  import "swiper/css";
  import "swiper/css/navigation";
  import "swiper/css/pagination";

  export let title: string;
  export let tw: string;
</script>

<div class="relative">
  <div
    class="absolute z-10 grid w-full h-full place-content-center pointer-events-none"
  >
    <h1 class="text-title">{title}</h1>
  </div>
  <Swiper
    modules={[Navigation, Pagination, A11y]}
    navigation
    pagination={{ clickable: true }}
    grabCursor={true}
    speed={500}
    class={tw}
  >
    <SwiperSlide
      ><div
        class="h-[250px] bg-[url('https://i.imgur.com/sUPf0wN.jpg')] bg-cover bg-center opacity-50"
      /></SwiperSlide
    >
    <SwiperSlide
      ><div
        class="h-[250px] bg-[url('https://i.imgur.com/2K3s35g.jpg')] bg-cover bg-center opacity-50"
      /></SwiperSlide
    >
    <SwiperSlide
      ><div
        class="h-[250px] bg-[url('https://i.imgur.com/wtjYwZ8.jpg')] bg-cover bg-center opacity-50"
      /></SwiperSlide
    >
  </Swiper>
</div>

<style>
  :root {
    --swiper-theme-color: #fff;
  }

  @media (min-width: 40rem) {
    .text-title {
      font-size: clamp(3rem, 7vw, 5rem);
    }
  }
</style>
