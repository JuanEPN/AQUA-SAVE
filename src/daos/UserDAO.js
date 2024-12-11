import {
  collection,
  doc,
  getDoc,
  deleteDoc,
  updateDoc,
  addDoc,
} from "firebase/firestore";
import { db } from "../../firebase.config";

class UserDAO {
  constructor() {
    this.collectionRef = collection(db, "users");
  }

  async getUserById(id) {
    try {
      const userDoc = await getDoc(doc(this.collectionRef, id));
      if (userDoc.exists()) {
        return { success: true, data: userDoc.data() };
      } else {
        return { success: false, data: null };
      }
    } catch (error) {
      console.log("Error getting document:", error);
      return { success: false, data: null, error };
    }
  }

  async createUser(userData) {
    try {
      const docRef = await addDoc(this.collectionRef, userData);
      console.log("Document written with ID: ", docRef.id);
      return { success: true, id: docRef.id };
    } catch (error) {
      console.error("Error adding document: ", error);
      return { success: false, error };
    }
  }

  async updateUser(id, userData) {
    try {
      const userRef = doc(this.collectionRef, id);
      await updateDoc(userRef, userData);
      console.log("Document successfully updated!");
      return { success: true };
    } catch (error) {
      console.error("Error updating document: ", error);
      return { success: false, error };
    }
  }

  async deleteUser(id) {
    try {
      await deleteDoc(doc(this.collectionRef, id));
      console.log("Document successfully deleted!");
      return { success: true };
    } catch (error) {
      console.error("Error removing document: ", error);
      return { success: false, error };
    }
  }
}

export default new UserDAO();