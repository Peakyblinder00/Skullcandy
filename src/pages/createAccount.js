import "../styles/sign.css";
import { TbCameraPlus } from "react-icons/tb";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth, storage, firestore } from "../firebase/firebaseConfg";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom"
import { NavbarContext } from "../context/useContext";
import Loader from "../components/extraComponents/loader/loader";

const CreateAccount = () => {

  const style = {
    createAccount: "w-[100%] h-auto flex flex-col items-center py-[50px] px-[20px]",
    newAccount: "text-black text-[55px] font-black uppercase mb-[10px]",
    createAccountInpWrapper: "sm:w-[100%] lg:w-[450px] flex flex-col",
    createAccountInp: "w-full h-[50px] bg-[#F6F6F6] border-[#DDDDDD] border-[1px] outline-none focus:border-[#4d4d4d] px-[30px] text-black text-[15px] font-normal",
    createAccountDes: "text-black text-[14px] my-[10px]",
    createAccountBtnWrapper: "flex justify-center",
    createAccountInpFile: "hidden",
    createAccountInpFileLabel: "w-[100%] h-[50px] bg-[#F6F6F6] border-[#4d4d4d] border-[2px] cursor-pointer",
    cameraPlusIcon: "text-[#4d4d4d] text-[35px] mx-auto mt-[5px]",
    loaderWindow: "w-full h-full fixed top-0 left-0 z-[10] hidden",
    loaderWindowMain: "w-full h-full bg-[#000000a1] opacity-[0] grid place-items-center duration-[.3s]"
  }

  const [error, seterror] = useState(false)
  const navigate = useNavigate()
  const {setLoader, loader} = useContext(NavbarContext)


  const SignUp = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    const displayName = e.target[2].value;
    const lastname = e.target[3].value;
    const phoneNumber = e.target[4].value;
    const file = e.target[5].files[0];

    const res = await createUserWithEmailAndPassword(auth, email, password);
    localStorage.setItem("Name", displayName);
    localStorage.setItem("Email", email);

    const storageRef = ref(storage, displayName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    try {
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + Math.floor(progress) + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              setLoader(true)
              break;

          }
        },
        (error) => { },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            await setDoc(doc(firestore, "users", res.user.uid), {
              displayName,
              email,
              phoneNumber: phoneNumber,
              lastname: lastname,
              photoURL: downloadURL,
              uid: res.user.uid,
            });
            localStorage.setItem("photoURL", downloadURL);
          });
          navigate("/");
          setLoader(true)
        }
      );
    } catch (error) {
      seterror(true);
    }
  };

  return (
    <div className={style.createAccount}>
      <div style={{ display: `${loader ? "block" : "none"}` }} className={style.loaderWindow}>
        <div style={{ opacity: `${loader ? "1" : "0"}`, transitionDelay: `${loader ? ".3s" : "0"}` }} className={style.loaderWindowMain}>
          <Loader />
        </div>
      </div>
      <p id="create" className={style.newAccount}>new account</p>
      <form id="form" onSubmit={SignUp} className={style.createAccountInpWrapper}>
        <p className={style.createAccountDes}>Email:</p>
        <input className={style.createAccountInp} type="email" name="" />
        <p className={style.createAccountDes}>Password:</p>
        <input className={style.createAccountInp} type="password" name="" />
        <p className={style.createAccountDes}>First Name:</p>
        <input className={style.createAccountInp} type="text" />
        <p className={style.createAccountDes}>Last Name:</p>
        <input className={style.createAccountInp} type="text" />
        <p className={style.createAccountDes}>Phone Number:</p>
        <input className={style.createAccountInp} type="text" name="" />
        <p className={style.createAccountDes}>Your Phote:</p>
        <label className={style.createAccountInpFileLabel} htmlFor="userPhoto">
          <TbCameraPlus className={style.cameraPlusIcon} />
        </label>
        <input className={style.createAccountInpFile} id="userPhoto" type="file" name="" />
        <div className={style.createAccountBtnWrapper}>
          <button type="submit" to="/create-account" id="buttonSkewHover2" className="mt-[20px]">
            <p id="btnText2">create account</p>
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateAccount;