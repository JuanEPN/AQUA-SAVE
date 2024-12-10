import { create } from 'zustand';

const useQuizStore = create((set) => ({
  levels: 0,
  incrementLevels: () => set((state) => ({ levels: state.levels + 1 })),
}));

export default useQuizStore;
