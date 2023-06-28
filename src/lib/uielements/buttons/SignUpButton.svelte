<script lang="ts">
    import {createNewUserByEmail, setUserDetails} from "../../database/usermanagement/UserManager";

    function handleClick() {
        if (localStorage.getItem("registration1Complete") === "false") {
            createNewUserByEmail(localStorage.getItem("loginEmail"), localStorage.getItem("loginPassword"))
        } else {
            setUserDetails(localStorage.getItem("username"),
                localStorage.getItem("userRole"), localStorage.getItem("defaultEditor"),
                localStorage.getItem("githubUsername"))
        }
    }

</script>

<button
        class="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700
            transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
        on:click={handleClick}
>
    <svg
            class="w-6 h-6 -ml-2"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
    >
        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="8.5" cy="7" r="4"/>
        <path d="M20 8v6M23 11h-6"/>
    </svg>
    <span class="ml-3">Continue</span>
</button>