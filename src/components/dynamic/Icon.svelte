<script>
  import feather from "feather-icons";
  export const directions = ["n", "ne", "e", "se", "s", "sw", "w", "nw"];

  let classes = "";
  export { classes as class };

  export let name;
  export let id = "";
  export let direction = "n";
  export let strokeWidth = "2";
  export let stroke = "currentColor";
  export let width = "1em";
  export let height = "1em";

  $: icon = feather.icons[name];
  $: rotation = directions.indexOf(direction) * 45;
  $: if (icon) {
    icon.attrs["stroke"] = stroke;
    icon.attrs["stroke-width"] = strokeWidth;
  }
</script>

{#if icon}
  <svg
    {...icon.attrs}
    class={classes}
    {id}
    style="width: {width}; height: {height}; transform: rotate({rotation}deg);"
    on:click
  >
    <g>
      {@html icon.contents}
    </g>
  </svg>
{/if}

<style>
  svg {
    width: 1em;
    height: 1em;
    overflow: visible;
    transform-origin: 50% 50%;
  }
</style>
