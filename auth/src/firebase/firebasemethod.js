import { app } from '../firebase/firebaseinitialization'
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set, onValue} from "firebase/database";


const auth = getAuth(app);
const database = getDatabase(app);



const userSigning = (obj) => {

    let {username, email, password} = obj

    return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => { 
        // Signed in 
        const user = userCredential.user;
        const refernce = ref(database, `users/${user.uid}`)
        set(refernce, obj).then(()=>{resolve("data send to database")}).catch((error)=>{console.log(error)})
        console.log(user)
        // ... 
        console.log("user is created and data send to database") })
    .catch((error) => { 
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error)
        // ..
        console.log("error user is not created") })

    })
    
    }

    const GetData = (obj) => {

        let {username, email, password} = obj
        return new Promise((resolve, reject) => {
            signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => { 
            // Signed in 
            const user = userCredential.user;
            const refernce = ref(database, `users/${user.uid}`)
            set(refernce, obj).then(()=>{resolve("data send to database")}).catch((error)=>{console.log(error)})
            onValue(refernce, (snapshot) => {
                const e = snapshot.val() 
                console.loge(e.val())
            })
            console.log(user)
            // ... 
            console.log("user is created and data send to database") })
        .catch((error) => { 
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error)
            // ..
            console.log("error user is not created") })
    
        })
        
        }

        const Registerdata = (obj) => {

            let {FirstName,
                Lastname,
                Course,
                contact,
                cnic,
                fatherCnic,
                fatherContact,
                EmergencyContact,
                DateOfBirth,
                Age,
            email,password} = obj
        
            return new Promise((resolve, reject) => {
                createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => { 
                // Signed in 
                const user = userCredential.user;
                const refernce = ref(database, `Register/${user.uid}`)
                set(refernce, obj).then(()=>{resolve("data send to database")}).catch((error)=>{console.log(error)})
                console.log(user)
                // ... 
                console.log("user is created and data send to database") })
            .catch((error) => { 
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error)
                // ..
                console.log("error user is not created") })
        
            })
            
            }
        
    

export { userSigning, GetData, Registerdata }