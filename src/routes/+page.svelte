<script lang="ts">
    import Input from '$lib/Input.svelte';
    import Button from '$lib/Button.svelte';
    
    let value: string;
    let todos = [
        { id: '1', todo: 'brush my teeth' },
        { id: '2', todo: 'wash my hair' },
        { id: '3', todo: 'comb my cat' }
    ];

    // const addItem = () => {
    //     const id = (todos.length + 1).toString();
    //     if (value) {
    //         todos = [...todos, { id, todo: value }];
    //         value = ""; // Clear input field after adding todo
    //     }
    // };
</script>

<div class="flex flex-col justify-center items-center">
	<h1 class="text-4xl font-bold py-10">Sveltekit + AWS Todo-List App</h1>

	<div class="bg-white shadow-md rounded w-full max-w-lg px-8 pt-6 pb-4 justify-center">
        <form class="mb-4" method="POST">
            <div class="flex gap-1 mb-4">
                <Input bind:value={value} id="input" placeholder="Stuff to do"/>
                <Button>Add</Button>
            </div>
        </form>
        <ul>
            {#each todos as { id, todo }, i}
                <li>
                    {id} {todo}
                </li>
            {/each}
        </ul>
    </div>
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
