<script lang="ts">
  // import Swiper core and required modules
  import { Navigation, Pagination, A11y } from "swiper";

  import { Swiper, SwiperSlide } from "swiper/svelte";

  // Import Swiper styles
  import "swiper/css";
  import "swiper/css/navigation";
  import "swiper/css/pagination";

  export let title: string;
  export let pics: string[];
  export let tw: string = "";
</script>

<div class="relative">
  <div
    class="absolute z-10 grid w-full h-full place-content-center pointer-events-none"
  >
    <h1 class="text-title pointer-events-auto">{title}</h1>
  </div>
  <Swiper
    modules={[Navigation, Pagination, A11y]}
    navigation
    pagination={{ clickable: true }}
    speed={500}
    grabCursor={true}
    class={tw}
  >
    {#each pics as pic}
      <SwiperSlide
        ><div
          class={`h-[250px] bg-cover bg-center opacity-50`}
          style="background-image: url('{pic}')"
        /></SwiperSlide
      >
    {/each}
  </Swiper>
</div>

<style>
  :root {
    --swiper-theme-color: #fff;
  }

  /* TODO: refactor this */
  /* Add to Tailwind theme? */
  @media (min-width: 40rem) {
    .text-title {
      font-size: clamp(3rem, 7vw, 5rem);
    }
  }
</style>
