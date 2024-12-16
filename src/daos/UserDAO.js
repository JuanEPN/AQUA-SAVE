import {
  collection,
  doc,
  getDoc,
  deleteDoc,
  updateDoc,
  addDoc,
  getDocs,
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

  async getUserByEmail(email) {
    try {
      const q = query(this.collectionRef, where("email", "==", email));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const userDoc = querySnapshot.docs[0]; // Tomar el primer documento encontrado
        return { success: true, data: { id: userDoc.id, ...userDoc.data() } };
      } else {
        return { success: false, data: null };
      }
    } catch (error) {
      console.error("Error finding user by email:", error);
      return { success: false, error };
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

  async updateGoldCoin(id, newGoldCoinValue) {
    try {
      const userRef = doc(this.collectionRef, id);

      // Actualizar el campo goldCoin en el documento
      await updateDoc(userRef, { goldCoin: newGoldCoinValue });
      console.log(`GoldCoin updated successfully for user ID: ${id}`);
      return { success: true };
    } catch (error) {
      console.error("Error updating goldCoin:", error);
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
  async updateGoldCoinByEmail(email, newGoldCoinValue) {
    try {
      // Buscar al usuario por su email
      const userResult = await this.getUserByEmail(email);
  
      if (!userResult.success || !userResult.data) {
        console.error("User not found or an error occurred");
        return { success: false, message: "User not found" };
      }
  
      const userId = userResult.data.id;
  
      // Actualizar el valor de goldCoin
      const updateResult = await this.updateGoldCoin(userId, newGoldCoinValue);
  
      if (updateResult.success) {
        console.log(`GoldCoin updated successfully for user email: ${email}`);
        return { success: true };
      } else {
        console.error("Error updating goldCoin");
        return { success: false, message: "Error updating goldCoin" };
      }
    } catch (error) {
      console.error("Error in updateGoldCoinByEmail:", error);
      return { success: false, error };
    }
  }
  
}

export default new UserDAO();