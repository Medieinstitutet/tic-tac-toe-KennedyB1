import { reactive } from 'vue';

const state = reactive({
  names: [] as string[],
});

export const Username = {
  get names() {
    return (state.names);
  },
  setNames(names: string[]) {
    state.names = names;
  },
};
