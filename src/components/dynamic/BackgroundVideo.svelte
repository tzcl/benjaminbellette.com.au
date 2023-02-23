<script lang="ts">
  let loaded = false;
  setTimeout(() => (loaded = true), 1000);
</script>

<div class="absolute h-full w-full">
  <div class="relative h-full w-full overflow-hidden">
    <iframe
      src="https://player.vimeo.com/video/801033173?h=c1906e83d1&background=1"
      id="video"
      title="2019 Reel Benjamin Bellette"
      frameborder="0"
      width="100%"
      height="100%"
      allow="autoplay; fullscreen; picture-in-picture;"
      class:loaded
      on:load={() => (loaded = true)}
    />
  </div>
</div>

<style>
  #video {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%);

    visibility: hidden;
    opacity: 0;
    transition: opacity 2000ms ease-in 150ms;
  }

  #video.loaded {
    visibility: visible;
    opacity: 0.5;
  }

  @media (min-aspect-ratio: 16/9) {
    #video {
      /* height = (9 / 16) * 100 */
      height: 56.25vw;
    }
  }

  @media (max-aspect-ratio: 16/9) {
    #video {
      /* width = 100 / (9 / 16) */
      width: 177.78vh;
    }
  }
</style>
