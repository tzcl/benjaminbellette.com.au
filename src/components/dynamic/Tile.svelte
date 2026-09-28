<script lang="ts" context="module">
  export interface Item {
    type?: "img" | "iframe" | "popup";
    src?: string;
    title?: string;
    aspectRatio?: string;
  }
</script>

<script lang="ts">
  import { onDestroy, tick } from "svelte";
  import Icon from "./Icon.svelte";

  export let title: string;
  export let subtitle: string;
  export let img: string | undefined = undefined;
  export let items: Item[] = [];

  let modal: HTMLDialogElement;
  let isOpen = false;
  let previousOverflow = "";
  let previousPadding = "";
  $: video = items.some((item) => item.type === "iframe" || item.type === "popup");

  async function showModal() {
    if (isOpen) return;
    previousOverflow = document.body.style.overflow;
    previousPadding = document.body.style.paddingRight;
    const padding = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (padding) document.body.style.paddingRight = padding + "px";
    isOpen = true;
    await tick();
    modal.showModal();
  }

  function restorePage() {
    if (!isOpen) return;
    isOpen = false;
    document.body.style.overflow = previousOverflow;
    document.body.style.paddingRight = previousPadding;
  }

  function closeModal() {
    modal.close();
    restorePage();
  }

  onDestroy(restorePage);
</script>

<div class="relative h-full w-full">
  <button
    type="button"
    class="group relative h-full w-full bg-grey-850 bg-cover bg-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink"
    style:background-image={img ? "url('" + img + "')" : undefined}
    aria-label={"View " + title + (subtitle ? " — " + subtitle : "")}
    aria-haspopup="dialog"
    on:click={showModal}
  >
    <span
      class={"absolute inset-0 flex select-none flex-col justify-center p-4 text-center transition-all duration-300 ease-in-out " +
        (img
          ? "bg-white/80 text-black opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"
          : "bg-grey-850 text-white group-hover:bg-grey-750")}
    >
      <Icon name={video ? "video" : "camera"} width="20px" height="20px" class="pointer-events-none mx-auto mb-2" />
      <span class="tile-title">{title}</span>
      <span class="tile-subtitle">{subtitle}</span>
    </span>
  </button>

  <dialog
    class="max-h-full w-full max-w-full overscroll-contain border-0 bg-transparent p-0 text-white backdrop:bg-black/75 open:animate-slide-in"
    bind:this={modal}
    aria-label={title}
    on:click={(event) => { if (event.target === modal) closeModal(); }}
    on:cancel={(event) => { event.preventDefault(); closeModal(); }}
    on:close={restorePage}
  >
    {#if isOpen}
      <div class="w-dialog mx-auto my-8">
        <button
          type="button"
          class="ml-auto mb-4 block rounded p-2 hover:bg-grey-750 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
          aria-label="Close gallery"
          autofocus
          on:click={closeModal}
        >
          <Icon name="x" width="32px" height="32px" />
        </button>
        <h2 class="mb-6">{title}</h2>
        {#each items as item}
          {#if item.type === "iframe"}
            <div class="mb-12 bg-black shadow-lg">
              <iframe
                src={item.src}
                title={item.title || title}
                width="100%"
                height="100%"
                allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
                allowfullscreen
                class={"border-0 " + (item.aspectRatio || "aspect-video")}
              />
            </div>
          {:else if item.type === "popup"}
            <div class="mb-12 bg-white pb-16 pt-6 text-black">
              <div class="w-popup mx-auto text-center">
                <h3 class="my-8 text-black">Hi!</h3>
                <p class="my-4 text-black">If you would like to watch this, please feel free to contact me directly for a private link.</p>
                <Icon name="facebook" class="mr-2 inline" />
                <a class="text-black hover:text-grey-400" href="https://www.facebook.com/ben.bellette.DOP/">ben.bellette.DOP</a><br />
                <Icon name="mail" class="mr-2 inline" />
                <a class="text-black hover:text-grey-400" href="mailto:ben.bellette@gmail.com">ben.bellette@gmail.com</a>
              </div>
            </div>
          {:else}
            <div class="mb-12 bg-black">
              <img
                src={item.src}
                alt={item.title && item.title !== "Stills" ? item.title : title + " — Still"}
                loading="lazy"
                class="mx-auto h-auto max-h-[90vh] w-auto max-w-full select-none object-contain"
              />
            </div>
          {/if}
        {/each}
      </div>
    {/if}
  </dialog>
</div>

<style>
  .tile-title {
    font-family: "Open Sans", Arial, Helvetica, sans-serif;
    font-size: 1.1em;
    font-weight: 700;
    line-height: 1.5;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    white-space: pre-line;
  }
  .tile-subtitle {
    font-family: "Open Sans", Arial, Helvetica, sans-serif;
    font-size: 0.75rem;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
</style>
