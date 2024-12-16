import { create } from 'zustand';

const useQuizStore = create((set) => ({
  levels: 0,  // Contador de niveles
  collidedObjects: new Set(),  // Para rastrear los objetos que ya han colisionado
  incrementLevels: () => set((state) => ({ levels: state.levels + 1 })),
  addCollidedObject: (objectName) => set((state) => {
    const newCollidedObjects = new Set(state.collidedObjects);
    newCollidedObjects.add(objectName); // Agregar el objeto al Set
    return { collidedObjects: newCollidedObjects };
  }),

  resetQuiz: () =>
    set(() => ({      
      levels: 0,    
      collidedObjects: new Set(),
      showPopup: false, 
      isResetting: true, // Activa el reseteo
    })),
  endReset: () => set(() => ({ isResetting: false })), // Desactiva el reseteo
}));

export default useQuizStore;

