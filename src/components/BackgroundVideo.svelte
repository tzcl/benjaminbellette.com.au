<script lang="ts">
  let loaded = false;
</script>

<div class="absolute h-full w-full">
  <div class="relative h-screen w-screen overflow-hidden">
    <iframe
      src="https://player.vimeo.com/video/316965018?background=1?transparent=1"
      title="2019 Reel Benjamin Bellette"
      id="video"
      frameborder="0"
      width="100%"
      height="100%"
      allow="autoplay; fullscreen; picture-in-picture;"
      allowfullscreen
      class="translate-center w-iframe h-iframe absolute top-1/2 left-1/2"
    />
  </div>
</div>

<style>
  .translate-center {
    transform: translate(-50%, -50%);
  }

  @media (min-aspect-ratio: 16 / 9) {
    .h-iframe {
      /* height = (9 / 16) * 100 */
      height: 56.25vw;
    }
  }

  @media (max-aspect-ratio: 16 / 9) {
    .w-iframe {
      /* width = 100 / (9 / 16) */
      width: 177.78vh;
    }
  }
</style>
