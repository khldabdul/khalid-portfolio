<script lang="ts">
	export let skills: string[] = [];
	export let columns: number = 3;
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-{columns} gap-4">
	{#each skills as skill}
		<div class="badge badge-lg p-4">{skill}</div>
	{/each}
</div>
