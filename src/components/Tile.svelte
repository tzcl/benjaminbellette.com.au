<script lang="ts" context="module">
  export interface Item {
    type: string;
    content: string;
    label: string;
  }
</script>

<script lang="ts">
  import IoIosClose from "svelte-icons/io/IoIosClose.svelte";
  let modal: HTMLDialogElement;

  function showModal() {
    console.log("showing modal");
    const padding = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${padding}px`;
    modal.showModal();
  }

  function exitModal() {
    console.log("exiting modal");
    modal.addEventListener("animationend", closeModal);
    // setTimeout(closeModal, 1000);
    modal.setAttribute("data-exiting", "");
    // modal.classList.add("exiting");
  }

  function closeModal() {
    console.log("closing modal");
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";
    modal.removeAttribute("data-exiting");
    // modal.classList.remove("exiting");
    modal.removeEventListener("animationend", closeModal);
    modal.close();
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
    class="max-h-full w-full max-w-full overscroll-contain border-0 bg-transparent p-0 backdrop:bg-black/75 open:animate-slide-down open:backdrop:animate-fade-in [&[data-exiting]]:animate-slide-up [&[data-exiting]]:backdrop:animate-fade-out"
    bind:this={modal}
    on:click={(e) => {
      // @ts-ignore
      if (e.target.tagName == "DIALOG") exitModal();
    }}
  >
    <div class="w-dialog pointer-events-auto mx-auto mt-20">
      <div
        class="ml-auto h-16 w-16 text-white hover:cursor-pointer"
        on:click={() => exitModal()}
      >
        <IoIosClose />
      </div>
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
            class="h-item mb-8 select-none object-cover"
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
