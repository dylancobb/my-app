<script lang="ts">
	export let id: string;
	export let placeholder: string;
    export let value: string
</script>

<input
	class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
	{id}
	type="text"
	{placeholder}
    bind:value={value}
/>
