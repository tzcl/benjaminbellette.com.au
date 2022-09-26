<script lang="ts" context="module">
  export interface Item {
    type: string;
    content: string;
    label: string;
  }
</script>

<script lang="ts">
  import { fade } from "svelte/transition";
  let modal;

  function showModal() {
    document.body.style.overflow = "hidden";
    modal.showModal();
  }

  export let items: Item[];
</script>

<div class="relative">
  <div
    class="height group"
    style="background: url('{'/assets/mumlife.png'}') center center / cover #111"
  >
    <div
      class="absolute inset-0 flex cursor-pointer select-none flex-col justify-center bg-black/50 text-center transition-all duration-300 ease-in-out group-hover:visible group-hover:opacity-100 can-hover:invisible can-hover:opacity-0"
      on:click={showModal}
    >
      <img
        width="16.5"
        height="21"
        src="./assets/play.svg"
        class="pointer-events-none mx-auto"
        alt=""
      />
      <h3>Mumlife</h3>
      <p>text</p>
    </div>
  </div>

  <dialog
    class="max-h-full w-full max-w-full overscroll-contain border-0 bg-transparent p-0 backdrop:bg-black/75"
    bind:this={modal}
    on:click={(e) => {
      if (e.target.tagName == "DIALOG") modal.close();
    }}
    on:close={() => document.body.style.removeProperty("overflow")}
  >
    <div class="w-dialog pointer-events-auto mx-auto mt-20">
      <!-- TODO: add X to close modal -->
      {#each items as item}
        {#if item.type === "iframe"}
          <iframe
            src={item.content}
            title={item.label}
            frameborder="0"
            width="100%"
            height="100%"
            class="h-item mb-8 object-cover"
          />
        {:else if item.type === "img"}
          <img
            src={item.content}
            alt={item.label}
            width="100%"
            height="100%"
            class="h-item mb-8 object-cover"
          />
        {/if}
      {/each}
    </div>
  </dialog>
</div>

<style>
  .height {
    height: max(25em, 18.75vw);
  }

  .w-dialog {
    width: min(53rem, 80%);
  }

  .h-item {
    height: min(480px, 45vw);
  }
</style>
