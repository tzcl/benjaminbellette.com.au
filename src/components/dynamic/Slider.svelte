<script lang="ts">
  // import Swiper core and required modules
  import { A11y, Navigation, Pagination } from "swiper";
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
    class="pointer-events-none absolute z-10 grid h-full w-full place-content-center"
  >
    <h1 class="title pointer-events-auto">{title}</h1>
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
          class={`h-[150px] bg-cover bg-center opacity-50 md:h-[200px] lg:h-[250px]`}
          style="background-image: url('{pic}')"
        /></SwiperSlide
      >
    {/each}
  </Swiper>
</div>
