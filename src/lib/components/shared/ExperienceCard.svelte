<script lang="ts">
	export let title: string;
	export let company: string;
	export let period: string;
	export let location: string;
	export let description: string[] = [];
	export let achievement: string = '';
</script>

<div class="card card-shadow bg-base-100 overflow-hidden mb-6">
	<div class="card-body p-6">
		<div class="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
			<div>
				<h3 class="text-xl font-semibold text-primary">{title}</h3>
				<h4 class="text-lg font-medium">{company}</h4>
			</div>
			<div class="text-sm md:text-right">
				<p class="font-medium">{period}</p>
				<p>{location}</p>
			</div>
		</div>

		<div class="mt-4">
			<ul class="list-disc list-inside space-y-2">
				{#each description as item}
					<li>{item}</li>
				{/each}
			</ul>

			{#if achievement}
				<div class="mt-3">
					<p class="font-semibold">Key Achievement:</p>
					<p>{achievement}</p>
				</div>
			{/if}
		</div>
	</div>
</div>
