<script lang="ts" context="module">
  import { onMount } from "svelte";
  import Icon from "../components/Icon.svelte";

  export interface Item {
    type: string;
    content: string;
    label: string;
  }
</script>

<script lang="ts">
  export let title: String;
  export let subtitle: String;
  export let img: String;
  export let items: Item[];

  let iframe: HTMLIFrameElement; // assume there is at most one video per tile
  let player;

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
    class="group h-full w-full"
    style={`background: url('${img}') center center / cover #111`}
  >
    <div
      class="absolute inset-0 flex cursor-pointer select-none flex-col justify-center bg-black/50 text-center transition-all duration-300 ease-in-out group-hover:visible group-hover:opacity-100 can-hover:invisible can-hover:opacity-0"
      on:click={showModal}
    >
      {#if player}
        <Icon
          name="play"
          width="24px"
          height="24px"
          class="pointer-events-none mx-auto"
        />
      {/if}
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </div>
  </div>

  <dialog
    class="max-h-full w-full max-w-full overscroll-contain border-0 bg-transparent p-0 backdrop:bg-black/75 open:animate-slide-in open:backdrop:animate-fade-in [&[data-exiting]]:animate-slide-out [&[data-exiting]]:backdrop:animate-fade-out"
    bind:this={modal}
    on:click={(e) => {
      // @ts-ignore
      if (e.target.tagName == "DIALOG") exitModal();
    }}
  >
    <div class="w-dialog mx-auto mt-12">
      <img
        src="./assets/x.svg"
        alt=""
        width="32px"
        height="32px"
        class="ml-auto pb-2 hover:cursor-pointer"
        on:click={() => exitModal()}
      />
      {#each items as item}
        {#if item.type === "iframe"}
          <iframe
            src={item.content}
            title={item.label}
            frameborder="0"
            width="100%"
            height="100%"
            allow="autoplay; fullscreen; picture-in-picture;"
            allowfullscreen
            class="mb-12 object-cover"
            bind:this={iframe}
          />
        {:else if item.type === "img"}
          <img
            src={item.content}
            alt={item.label}
            width="100%"
            height="100%"
            class="mb-12 select-none object-cover"
          />
        {/if}
      {/each}
    </div>
  </dialog>
</div>

<style>
  .w-dialog {
    width: min(53rem, 80%);
  }
</style>
