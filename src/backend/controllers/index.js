
import { addDoc, collection, getDocs, getDoc, doc, updateDoc, deleteDoc } from "firebase/firestore"; 
import {app, db, auth} from "../../../firebase-config/config.js"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";




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
    getUserByID: async (id, email, pw) => {
        signInWithEmailAndPassword(auth, email, pw).then(userCredential=>{
            const user = userCredential.user;
            console.log('signed in as', user)
        }).catch(err=>{
            const errorCode = err.code;
            const errorMessage = err.message;

            console.error(err.code, err.message);
        })
        try{
            const docRef = doc(db, "users", id);
            const docSnap = await getDoc(docRef);
            return docSnap.data()
        } catch(err){
            return err;
        }
    },
    createUser: async (obj) => {
        console.log(obj)
        createUserWithEmailAndPassword(auth, obj.response.email, obj.response.password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(error.code, error.message)
        });

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