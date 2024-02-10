import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useThemeContext } from "@/muitheme/ThemeContextProvider";
import { Box, Button, Card, InputAdornment, TextField, Typography } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import { loginInputs } from "@/typescripts/interfaces/login.interface";

import { Loginfunc } from "@/api/functions/Loginfunction";
import { toast } from "react-toastify";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { mode } = useThemeContext();
  const router = useRouter();
  const wrapperStyles = {
    color: mode === 'dark' ? 'white' : 'white',
    background: mode === 'dark' ? 'black' : 'white',
    minHeight: 'auto',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  };

  // Form Setup with Hook form
  const [loading, setloading] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm<loginInputs>();
  const onSubmit: SubmitHandler<loginInputs> = async (data: any) => {
    setloading(true);
    try {
      const response = await Loginfunc(data);
      if (!("error" in response)) {
        localStorage.setItem("token", JSON.stringify(response.jwt));
        toast.success("Login Successful");
        router.push("/dashboard");
      } else {
        toast.error(response.error);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setloading(false);
    }
  };

  return (
    <>
      <Box className="indexpage">
        <Card className="loginbox">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box className="loginform">
              <Typography variant="h4" gutterBottom className="loginform-head">
                BlueFlame Login Form
              </Typography>
              <TextField
                id="input-with-icon-textfield"
                label="Email"
                type="email"
                variant="filled"
                focused
                className="textfields"
                style={{ width: "70%" }}
                {...register("user", { required: true })}
              />
              <TextField
                id="input-with-icon-textfield"
                label="Password"
                type="password"
                variant="filled"
                focused
                className="textfields"
                style={{ width: "70%" }}
                {...register("password", { required: true })}
              />
              {
                loading ? (
                  <>
                    <Button variant="contained" color="primary" type="submit" className="loginbtn"
                      disabled>
                      Loading...
                    </Button>
                  </>
                ) : (
                  <>
                    <Button variant="contained" color="primary" type="submit" className="loginbtn"
                    >
                      Login
                    </Button>
                  </>
                )
              }
            </Box>
          </form>
        </Card>
      </Box>

    </>
  );
}
