<script lang="ts">
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
  <swiper-container
    navigation="true"
    pagination="true"
    a11y="true"
    grab-cursor="true"
    class={tw}
  >
    {#each pics as pic}
      <swiper-slide
        ><div
          class={`h-[150px] bg-cover bg-center opacity-50 md:h-[200px] lg:h-[250px]`}
          style="background-image: url('{pic}')"
        /></swiper-slide
      >
    {/each}
  </swiper-container>
</div>
