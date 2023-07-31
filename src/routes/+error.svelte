<script>
    import { page } from '$app/stores';
</script>


<div class="flex items-center justify-center flex-col pt-12">
    <h1>{$page.error?.message}</h1>
<p>An Error Occurred</p>
</div>