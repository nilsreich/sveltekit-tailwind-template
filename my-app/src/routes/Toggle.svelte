<script lang="ts">
import {useMachine} from "@xstate/svelte";
import {createMachine} from "xstate";
import { name } from '../store.js'

const toggleMachine = createMachine({
  id: "toggle",
  initial: "inactive",
  states: {
    inactive: {
      on: {
        TOGGLE: "active",
      },
    },
    active: {
      on: {
        TOGGLE: "inactive",
      },
    },
  },
});

const {state, send} = useMachine(toggleMachine);


	function reset() {
        console.log($state)
		name.set($state.value);
    }
</script>

<button on:click={() => send("TOGGLE")}>
  {$state.value==='inactive' ? "Off" : "On"}
</button>
<button on:click={()=>reset()}>SETNAME</button>
