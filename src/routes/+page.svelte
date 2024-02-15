<script>
    import Button from "$lib/Button.svelte";
    const addItem = () => {};
</script>

<div class="flex flex-col justify-center items-center">
    <h1 class="text-4xl font-bold py-10">
        Sveltekit + AWS Todo-List App
    </h1>

    <div class="w-full max-w-lg justify-center">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="flex gap-1 mb-4">
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Shit to do">
                <Button onClick={addItem}>Add</Button>
            </div>
        </form>
    </div>

</div>

<style lang="postcss">
    :global(html) {
        background-color: theme(colors.gray.100);
    }
</style>