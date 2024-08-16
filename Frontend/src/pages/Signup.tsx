import { Box, Button, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { IoMdLogIn } from "react-icons/io";
import toast, {} from "react-hot-toast";
import CustomizedInput from '../components/shared/CustomizedInput';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const auth = useAuth()
  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    try {
      toast.loading("Signing Up", {id: "signup"});
      await auth?.signup(name,email,password);
      toast.success("Signed up Successfully", {id: "signup"});
    } catch (error) {
      console.log(error);
      toast.error("Signing up Failed", {id: "signup"});
      
    }
  }
  useEffect(() => {
    if (auth?.user){
      return navigate("/chat");
    }
  }, [auth]);
  return (
    <Box width={'100%'} height = {"100%"} display = "flex" flex={1}>
      <Box padding = {5} mt={0} display = {{ md: "flex", sm: "none", xs: "none" }}>
            <img src = "airobot.jpg" alt="Robot" style = {{boxShadow:" 10px 10px 15px #000", borderRadius: "20px",width: "800px"}}/>
      </Box>
      <Box display = {'flex'} flex={{ xs:1, md: 0.5}}
      justifyContent={"center"}
      alignItems={"center"}
      padding={10}
      ml={"auto"}
      mt={0}  >

        <form 
        onSubmit={(handleSubmit)}
        style={{margin: 'auto', padding:"30px", boxShadow:" 5px 5px 10px #2cf", borderRadius: "30px", border: "none"

         }}
         > 
         <Box sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
         }}>
             <Typography
             variant = "h5" textAlign="center" padding = {2} fontWeight={500}>
              Signup
             </Typography>
             <CustomizedInput type="text" name = "name" label = "Name" />
             <CustomizedInput type="email" name = "email" label = "Email" />
             <CustomizedInput type="password" name= "password" label = "Password" />
             <div style={{ textAlign: 'center' }}>
             <Button type = "submit" sx={{px:2, py:1, mt:2, color: "black", width: "150px", borderRadius:20, bgcolor: "#00fffc",
              ":hover" : {
                bgcolor: "white",
                color: "skyblue",
              }
             }}
             endIcon={<IoMdLogIn/>}
             >Submit
             </Button>
             </div>
         </Box>
        </form>
      </Box>
    </Box>
  )
}

export default Signup;