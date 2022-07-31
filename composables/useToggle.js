import {ref} from "vue";

const useToggle = (defaultVal = false) => {
    const active = ref(defaultVal);
    const toggle = () => active.value = !active.value;

    return [active, toggle];
}

export default useToggle;
