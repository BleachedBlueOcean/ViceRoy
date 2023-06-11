
import { addDoc, collection, getDocs, getDoc, doc, updateDoc, deleteDoc } from "firebase/firestore"; 
import {app, db} from "../../../firebase-config/config.js"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";




const controllers =  {
    getUsers: async () => {
        const useColRef = collection(db, "users")
        try{
            const data = await getDocs(useColRef)
            // console.log(data.docs.map((doc)=>{console.log(doc.data())}));
            return data.docs.map((doc)=> ({...doc.data(), id: doc.id }));
        } catch(err){
            return err;
        }
    },
    getUserByID: async (id) => {
        try{
            const docRef = doc(db, "users", id);
            const docSnap = await getDoc(docRef);
            return docSnap.data()
        } catch(err){
            return err;
        }
    },
    createUser: async (obj) => {
        // const auth = getAuth();
        // createUserWithEmailAndPassword(auth, obj.email, obj.password)
        // .then((userCredential) => {
        //     // Signed in 
        //     const user = userCredential.user;
        //     // ...
        // })
        // .catch((error) => {
        //     const errorCode = error.code;
        //     const errorMessage = error.message;
        //     // ..
        // });
        const useColRef = collection(db, "users")
        try{
            await addDoc(useColRef, obj);
        } catch(err){
            return err;
        }
    },
    updateUser: async (id,obj) => {
        try{
            const docRef = doc(db, "users", id);
            await updateDoc(docRef, obj);
        } catch(err){
            return err;
        }
    },
    deleteUser: async(id)=>{
        try{
            const docRef = doc(db, "users", id);
            await deleteDoc(docRef);
        } catch (err){
            return err;
        }
    }
}

export default controllers;