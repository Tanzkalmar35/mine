<script lang="ts">

    import AppLogo from "../../uielements/img/AppLogo.svelte";
    import SignUpButton from "../../uielements/buttons/SignUpButton.svelte";
    import LoginInputElement from "../../uielements/inputelements/lightmode/LightModeTextInput.svelte";
    import LightModeTextInput from "../../uielements/inputelements/lightmode/LightModeTextInput.svelte";
    import LightModeDropdownElement from "../../uielements/inputelements/lightmode/LightModeDropdownElement.svelte";
    import {featuredEditors, featuredRoles, selectedEditor} from "../../AppConfig";
    import {get} from "svelte/store";
    import OpenFileExplorerButton from "../../uielements/buttons/OpenFileExplorerButton.svelte";
    import {checkEditorPath, toggleChooseEditorPath} from "../../osoperations/OpenApplication";

    let disabled: boolean = true;
    let projectPath: string = "";
    let chooseFileDiv;
    let chooseEditorPlaceholder: string = "Choose a code editor";

    $: {
        if ($selectedEditor !== "" && $selectedEditor !== chooseEditorPlaceholder) {
            checkEditorPathAvailable($selectedEditor)
        } else {
            console.log("selected editor: " + $selectedEditor)
        }
    }

    function checkEditorPathAvailable(editor: string) {
        if (!checkEditorPath(editor)) {
            if ($selectedEditor === "" || $selectedEditor === chooseEditorPlaceholder) return;
            toggleChooseEditorPath();
        } else {
            console.log("Editor path is available");
        }
    }

</script>


<div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12 overflow-hidden">
    <div class="max-w-[15rem] mx-auto">
        <AppLogo/>
    </div>
    <div class="mt-8 flex flex-col items-center">
        <h1 class="text-2xl xl:text-3xl font-extrabold">
            Welcome to mine. <br/>
        </h1>
        <h2 class="text-lg xl:text-xl mt-4">
            Please answer these few questions to get started.
        </h2>
        <div class="w-full flex-1 mt-8">
            <div class="mx-auto max-w-xs">
                <div class="flex flex-col gap-4">
                    <LoginInputElement description="What is you name?" placeholder="Your name"/>
                    <LightModeDropdownElement
                            description="What code editor do you use?"
                            id="userEditor"
                            options={get(featuredEditors)}
                            placeholder={chooseEditorPlaceholder}/>
                    <p class="text-red-500 mb-[-.5rem] mt-[-2rem] ml-1 text-sm hidden"
                       id="userEditorsErrorText">Couldn't find the path to this editor. Please choose the editor
                        executable.</p>
                    <div bind:this={chooseFileDiv} class="hidden" id="manuallyChooseEditorPath">
                        <OpenFileExplorerButton bind:currentFolderPath={projectPath} type="File"/>
                        <LightModeTextInput description="Editor Path" disabled={disabled}
                                            textValue={projectPath}/>
                    </div>
                    <LightModeDropdownElement description="What is your Role?" id="userRole"
                                              options={get(featuredRoles)} placeholder="What is your role?"/>
                </div>
                <SignUpButton/>
            </div>
        </div>
    </div>
</div>