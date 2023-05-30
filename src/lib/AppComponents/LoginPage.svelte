<script lang="ts">

    import CustomTextInput from "../UiElements/InputElements/CustomTextInput.svelte";
    import CustomPasswordInput from "../UiElements/InputElements/CustomPasswordInput.svelte";
</script>

<div class="flex justify-center text-white">
    <div class="h-fit w-fit">
        <div>
            <CustomTextInput placeHolder="Your name" type="text"/>
        </div>
        <div>
            <CustomTextInput placeHolder="Your email"/>
            <CustomPasswordInput placeHolder="Your password"/>
        </div>
    </div>
</div>
