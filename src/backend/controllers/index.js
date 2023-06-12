import { addDoc, collection, getDocs, getDoc, doc, updateDoc, deleteDoc, query, where} from "firebase/firestore";
import {app, db, auth} from "../../../firebase-config/config.js"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import helpers from './helpers.js'



const controllers =  {
    getAllUsers: async () => {
        const useColRef = collection(db, "users")
        try{
            const data = await getDocs(useColRef)
            // console.log(data.docs.map((doc)=>{console.log(doc.data())}));
            return data.docs.map((doc)=> ({...doc.data(), id: doc.id }));
        } catch(err){
            return err;
        }
    },
    getUser: async (email, pw) => {
        try{
            const userCred = await signInWithEmailAndPassword(auth, email, pw)
            const user = userCred.user;
            // console.log('signed in as', user)
                try{
                    const docRef = doc(db, "users", user.uid);
                    const docSnap = await getDoc(docRef);
                    return docSnap.data()
                } catch(err){
                    return err;
                }
        } catch(err){
            console.error(err.code, err.message);
        }

    },
    createUser: async (obj) => {
        console.log(obj)
        try{
            const userCred = await createUserWithEmailAndPassword(auth, obj.response.email, obj.response.password)
            console.log(userCred)
            obj = await helpers.transformCreateUser(obj, userCred.user.uid);
            // console.log(obj)
            try{
                const useColRef = collection(db, "users")
                console.log('ref' ,useColRef);
                await addDoc(useColRef, obj);
            } catch(err){
                console.error(err)
                return err;
            }
        } catch (err){
            const errorCode = err.code;
            const errorMessage = err.message;
            console.error(err.code, err.message)
        }
    },
    updateUser: async (uid,obj) => {
        try{
            const docRef = doc(db, "users", uid);
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