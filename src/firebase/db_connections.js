import { collection, getDoc } from "firebase/firestore"
import { FirebaseDB } from "./config"

export const getDataFromDb = () => {
    return async() => {
        const db_ref = await getDoc(collection( FirebaseDB, "stores" ));
        if(db_ref.exists){
            console.log(true);
        }
    }
}