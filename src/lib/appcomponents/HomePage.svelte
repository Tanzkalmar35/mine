<script lang="ts">
    import AppLogo from "../uielements/img/AppLogo.svelte";
    import HomePageNavbar from "../subcomponents/navigation/HomePageNavbar.svelte";
    import {onMount} from "svelte";

    onMount(function () {
        if (localStorage.getItem("loggedIn") === "false") {
            window.location.href = "/registration";
        }
    })

</script>

<div id="home">
    <div class="absolute z-10 w-full flex justify-center mt-[2vh]">
        <HomePageNavbar/>
    </div>
    <div class="mx-[.5vw] mt-3 relative w-[99vw] h-[40vh] z-0 rounded-[5vh] bg-primary">
        <div class="absolute scale-50 left-[-5rem]">
            <AppLogo/>
        </div>
        <p class="absolute bottom-0 left-[2vh] text-[7rem]">Home</p>
        <div>
            <p class="flex absolute bottom-[1vh] right-[20%] text-5xl">Daily online time (chart)</p>
        </div>
    </div>
    <div class="h-[56vh] mt-5 mx-[.5vw] flex-grow-[1] text-white">
        <div class="flex gap-5">
            <div class="w-[calc(100vw/4)] h-[calc(50vh/3)] bg-base-100 rounded-[2vh]">Total hours spent
                coding
            </div>
            <div class="w-[calc(100vw/4)] bg-base-100 rounded-[2vh]">All Friends</div>
            <div class="w-[calc(100vw/4)] bg-base-100 rounded-[2vh]">Total commits</div>
            <div class="w-[calc(100vw/4)] bg-base-100 rounded-[2vh]">CPU usage</div>
        </div>
        <div class="flex gap-5 mt-3">
            <div class="w-[calc(100vw/4)] h-[calc(50vh/3)] bg-base-100 rounded-[2vh]">Hours spent coding today</div>
            <div class="w-[calc(100vw/4)] bg-base-100 rounded-[2vh]">Favourite code editor</div>
            <div class="w-[calc(100vw/4)] bg-base-100 rounded-[2vh]">Github Profile</div>
            <div class="w-[calc(100vw/4)] bg-base-100 rounded-[2vh]">RAM usage</div>
        </div>
        <div class="flex gap-5 mt-3">
            <div class="w-[calc(100vw/4)] h-[calc(50vh/3)] bg-base-100 rounded-[2vh]">Screen time today</div>
            <div class="w-[calc(100vw/4)] bg-base-100 rounded-[2vh]">Friends online</div>
            <div class="w-[calc(100vw/4)] bg-base-100 rounded-[2vh]">commits today</div>
            <div class="w-[calc(100vw/4)] bg-base-100 rounded-[2vh]">Disk usage</div>
        </div>
    </div>
</div>
