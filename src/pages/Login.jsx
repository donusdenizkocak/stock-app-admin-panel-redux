import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LockIcon from "@mui/icons-material/Lock";
import image from "../assets/result.svg";
import { Link, useNavigate } from "react-router-dom";
import { Formik,Form } from 'formik';
import { TextField } from "@mui/material";
import { object, string } from 'yup';
import LoadingButton from '@mui/lab/LoadingButton';
import { useSelector } from "react-redux";
import useAuthCall  from "../hooks/useAuthCall";




const Login = () => {
  const navigate=useNavigate()
  const {loading, currentUser,error}=useSelector((state) => state?.auth)

  const {login} =useAuthCall()

  const loginScheme= object({  
    email: string().email("Lütfen valid bir email giriniz").required("Email zorunludur"),
    password: string()
    .required("password zorunludur")
    .min(8, "password en az 8 karakter olmalıdır")
    .max(20, "password en fazla 20 karakter olmalıdır")
    .matches(/\d+/, "Password bir sayı içermelidir")
    .matches(/[a-z]/, "Password bir küçük harf içermelidir")
    .matches(/[A-Z]/, "Password bir büyük harf içermelidir")
    .matches(/[!,?{}<>%&$#£+-.]+/, "Password bir özel karakter içermelidir")   
     //regex için matches fonksiyonu kullanılıyor yup için
  });
  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <Grid item xs={12} mb={3}>
          <Typography variant="h3" color="primary" align="center">
            STOCK APP
          </Typography>
        </Grid>

        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "secondary.light",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size="30" />
          </Avatar>
          <Typography
            variant="h4"
            align="center"
            mb={4}
            color="secondary.light"
          >
            Login
          </Typography>





   
    <Formik
     initialValues={{email:"",password:""}}
     validationSchema={loginScheme}
     onSubmit={(values,actions) => {
      //login(values) POST isteği
      login(values)
      // navigate
      actions.reset()
      actions.setSubmitting(false)
     }}
    >
      {({
         values,
         handleChange,
         handleBlur,
         errors,
         touched
         /* and other goodies */
       }) => (
        <Form>
          <Box sx={{display:"flex",flexDirection:"column",gap:2}}>
             <TextField
             label="Email"
             name="email"
             id="email"
             type="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values?.email || ""}
             variant="outlined"
             error={touched.email && Boolean(errors.email)}  //Short circuit
             helperText={touched.email && errors.email}
             required
             />
             <TextField
             label="Password"
             name="password"
             id="password"
             type="password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values?.password || ""}
             variant="outlined"
             error={touched.password && Boolean(errors.password)}  //Short circuit
             helperText={touched.password && errors.password}
             required
             />
             <LoadingButton type="submit" variant="contained" loading={loading}>
               Submit
             </LoadingButton>
          </Box>
        </Form>
       )}
      
    </Formik>

          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Link to="/register">Do you have not an account?</Link>
          </Box>
        </Grid>

        <Grid item xs={10} sm={7} md={6}>
          <Container>
            <img src={image} alt="img" />
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
