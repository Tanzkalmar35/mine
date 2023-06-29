/**
 * Toggles the visibility of the GitHub username input field.
 * @param visible whether the div should be visible or not
 */
export function toggleGitHubUserInputVisibility(visible: boolean): void {
    const gitHubUserInput: HTMLElement = document.getElementById("githubUserElement");

    if (visible) {
        gitHubUserInput.classList.remove("hidden");
    } else {
        gitHubUserInput.classList.add("hidden");
    }
}

/**
 * Toggles the visibility of the div containing the editor path selection
 * @param visibility whether the div should be visible or not
 */
export function toggleEditorPathElementVisibility(visibility: boolean): void {
    const selectPathDiv: HTMLElement = document.getElementById("manuallyChooseEditorPath");
    const errorMessage: HTMLElement = document.getElementById("userEditorsErrorText");

    if (!visibility) {
        errorMessage.classList.remove("hidden");
        selectPathDiv.classList.remove("hidden");
    } else {
        errorMessage.classList.add("hidden");
        selectPathDiv.classList.add("hidden");
    }
}