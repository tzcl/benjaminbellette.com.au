<script lang="ts" context="module">
  import { onMount } from "svelte";
  import Icon from "./Icon.svelte";

  export interface Item {
    type?: string;
    src?: string;
    title?: string;
    aspectRatio?: string;
  }
</script>

<script lang="ts">
  export let title: String;
  export let subtitle: String;
  export let img: String;
  export let items: Item[];

  let iframe: HTMLIFrameElement; // assume there is at most one video per tile
  let player;

  let video = items.some((item) => item.type !== "img");

  onMount(async () => {
    const Player = (await import("@vimeo/player")).default;
    if (iframe) player = new Player(iframe);
  });

  let modal: HTMLDialogElement;

  function showModal() {
    const padding = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${padding}px`;

    modal.showModal();
  }

  function exitModal() {
    modal.addEventListener("animationend", closeModal);
    modal.setAttribute("data-exiting", "");
  }

  function closeModal() {
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";

    modal.removeAttribute("data-exiting");
    modal.removeEventListener("animationend", closeModal);
    modal.close();

    if (player) player.pause();
  }
</script>

<div class="relative h-full w-full">
  <div
    class="group h-full w-full bg-cover bg-center"
    style={`background-image: url('${img}')`}
  >
    <div
      class="absolute inset-0 flex cursor-pointer select-none flex-col justify-center bg-white/80 text-center text-black opacity-0 transition-all duration-300 ease-in-out group-hover:visible group-hover:opacity-100"
      on:click={showModal}
    >
      <Icon
        name={video ? "video" : "camera"}
        width="20px"
        height="20px"
        class="pointer-events-none mx-auto"
      />
      <h3 class="whitespace-pre-line text-black">{title}</h3>
      <p class="text-black">{subtitle}</p>
    </div>
  </div>

  <dialog
    class="max-h-full w-full max-w-full overscroll-contain border-0 bg-transparent p-0 backdrop:bg-black/75 open:animate-slide-in open:backdrop:animate-fade-in [&[data-exiting]]:animate-slide-out [&[data-exiting]]:backdrop:animate-fade-out"
    bind:this={modal}
    on:click={(e) => {
      // @ts-ignore
      if (e.target.tagName == "DIALOG") exitModal();
    }}
    on:cancel={(e) => {
      e.preventDefault();
      exitModal();
    }}
  >
    <div class="w-dialog mx-auto mt-12">
      <svg
        class="feather feather-x ml-auto pb-2 hover:cursor-pointer"
        on:click={() => exitModal()}
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
        ><title>Close modal</title><line x1="18" y1="6" x2="6" y2="18" /><line
          x1="6"
          y1="6"
          x2="18"
          y2="18"
        />
      </svg>
      {#each items as item}
        {#if item.type === "iframe"}
          <div class="shadow-lg">
            <div class="bg-black">
              <iframe
                src={item.src}
                title={item.title ? item.title : ""}
                frameborder="0"
                width="100%"
                height="100%"
                allow="autoplay; fullscreen; picture-in-picture;"
                allowfullscreen
                class={`mb-12 object-cover ${
                  item.aspectRatio ? item.aspectRatio : "aspect-video"
                }`}
                bind:this={iframe}
              />
            </div>
          </div>
        {:else if item.type === "popup"}
          <div class="mb-12 h-fit bg-white pb-16 pt-6">
            <div class="w-popup mx-auto text-center">
              <h3 class="my-8 text-black">Hi!</h3>
              <p class="text-wr my-4 text-black">
                If you would like to watch this, please feel free to contact me
                directly for a private link.
              </p>
              <Icon name="facebook" class="mr-2 inline" />
              <a
                class="text-black hover:text-grey-400"
                href="https://www.facebook.com/ben.bellette.DOP/"
                >ben.bellette.DOP</a
              ><br />
              <Icon name="mail" class="mr-2 inline" />
              <a
                class="text-black hover:text-grey-400"
                href="mailto:ben.bellette@gmail.com">ben.bellette@gmail.com</a
              >
            </div>
          </div>
        {:else}
          <div class="mb-12 bg-black">
            <img
              src={item.src}
              alt={item.title ? item.title : ""}
              loading="lazy"
              width="100%"
              height="100%"
              class="select-none object-contain horizontal:aspect-video"
            />
          </div>
        {/if}
      {/each}
    </div>
  </dialog>
</div>
