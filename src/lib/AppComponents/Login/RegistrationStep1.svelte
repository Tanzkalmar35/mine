<script lang="ts">
    import LoginEmailInputElement from "../../UiElements/InputElements/LoginEmailInputElement.svelte";
    import SignUpWithButton from "../../UiElements/Buttons/SignUpWithButton.svelte";
    import LoginPasswordInputElement from "../../UiElements/InputElements/LoginPasswordInputElement.svelte";
    import AppLogo from "../../UiElements/Img/AppLogo.svelte";
    import SignUpButton from "../../UiElements/Buttons/SignUpButton.svelte";
</script>

<div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
    <div class="max-w-[15rem] mx-auto">
        <AppLogo/>
    </div>
    <div class="mt-12 flex flex-col items-center">
        <h1 class="text-2xl xl:text-3xl font-extrabold">
            Sign up or login for mine
        </h1>
        <div class="w-full flex-1 mt-8">
            <div class="flex flex-col items-center gap-4">
                <SignUpWithButton company="google" projectLabel="Sign up or login using Google"/>
                <SignUpWithButton company="github" projectLabel="Sign up or login using Github"/>
            </div>

            <div class="my-12 border-b text-center">
                <div
                        class="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2"
                >
                    Or sign up / login with e-mail
                </div>
            </div>

            <div class="mx-auto max-w-xs">
                <div class="flex flex-col gap-4" id="signUpForm">
                    <LoginEmailInputElement placeholder="Email"/>
                    <p class="text-red-500 mb-[-.5rem] mt-[-1rem] ml-1 hidden text-sm"
                       id="loginEmailErrorText"></p>
                    <LoginPasswordInputElement placeholder="Password"/>
                    <p class="text-red-500 mb-[-.5rem] mt-[-1rem] ml-1 hidden text-sm"
                       id="loginPasswordErrorText"></p>
                </div>
                <SignUpButton/>
                <p class="mt-6 text-xs text-gray-600 text-center hidden">
                    I agree to abide by mine's
                    <span class="border-b border-gray-500 border-dotted cursor-pointer">
                                    Terms of Service
                                </span>
                </p>
            </div>
        </div>
    </div>
</div>