import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Container,
  Button,
  InputAdornment,
  TextField,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Icon1 from "../../assets/contactIcons1.svg";
import Icon2 from "../../assets/contactIcons2.svg";
import emailjs from "emailjs-com";
import AnimatedSection from "../../Components/Animation/AnimatedSection.jsx";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_kat4qdm", // Replace with your EmailJS service ID
        "template_jb3r4jj", // Replace with your EmailJS template ID
        {
          from_name: formData.name, // Matches {{from_name}} in the template
          from_email: formData.email, // Matches {{from_email}} in the template
          user_budget: formData.budget, // Matches {{user_budget}} in the template
          user_message: formData.message, // Matches {{user_message}} in the template
        },
        "gXl5E7LuQmbULK-in" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", budget: "", message: "" });
        },
        (error) => {
          alert("Failed to send message, please try again.");
        }
      );
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const faqVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#121212",
        color: "white",
        paddingBottom: "50px",
        paddingTop: { xs: "10px", sm: "20px", md: "30px", lg: "40px" },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ width: "100%", margin: "0px 0px" }}>
          <Grid
            item
            xs={12}
            md={6}
            textAlign={{ xs: "center", md: "left" }}
            sx={{
              paddingLeft: { xs: "0px !important", md: "20px !important" },
              paddingRight: { xs: "0px !important", md: "20px !important" },
              paddingTop: { xs: "0px !important", md: "20px !important" },
            }}
          >
            <AnimatedSection variants={containerVariants}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: "bold",
                  color: "#fff",
                  fontSize: {
                    xs: "1.5rem",
                    sm: "2.5rem",
                    md: "3.3rem",
                    lg: "4rem",
                  },
                  maxWidth: { xs: "400px", sm: "560px", md: "560px" },
                  marginLeft: { xs: "auto", md: "0px" },
                  marginRight: { xs: "auto", md: "0px" },
                  py: "10px",
                }}
              >
                <Box
                  component="span"
                  sx={{
                    background: "linear-gradient(135deg, #007BFF, #00B4DB)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Get in touch
                </Box>
              </Typography>
            </AnimatedSection>
            <AnimatedSection variants={containerVariants}>
              <Typography
                variant="body1"
                sx={{
                  mt: 0,
                  color: "#fff",
                  py: { xs: "5px", md: "20px" },
                  fontSize: { xs: "12px", sm: "16px", md: "18px" },
                  lineHeight: { xs: "16px", sm: "24px", md: "30px" },
                  maxWidth: { xs: "400px", sm: "400px", md: "400px" },
                  marginLeft: { xs: "auto", md: "0px" },
                  marginRight: { xs: "auto", md: "0px" },
                  fontWeight: "100",
                  paddingBottom: "50px !important",
                }}
              >
                Have a project in mind? Looking to partner or work together?
                Reach out through the form and I'll get back to you in the next
                48 hours.
              </Typography>
            </AnimatedSection>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 2,
              }}
            >
              <Box
                component="img"
                src={Icon1}
                alt="Email Icon"
                sx={{
                  width: "20px",
                  height: "20px",
                }}
              />
              <Typography
                variant="body1"
                sx={{
                  mt: 0,
                  py: 0,
                  px: 2,
                  color: "#fff",
                  fontSize: { xs: "12px", sm: "16px", md: "1rem" },
                  maxWidth: { xs: "400px", sm: "560px", md: "560px" },
                }}
              >
                samranilyasgill007@gmail.com
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                src={Icon2}
                alt="Phone Icon"
                sx={{
                  width: "20px",
                  height: "20px",
                }}
              />
              <Typography
                variant="body1"
                sx={{
                  mt: 0,
                  py: 0,
                  px: 2,
                  color: "#fff",
                  fontSize: { xs: "12px", sm: "16px", md: "1rem" },
                  maxWidth: { xs: "400px", sm: "560px", md: "560px" },
                }}
              >
                +923335810849
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            textAlign={{ xs: "center", md: "left" }}
            sx={{
              paddingLeft: { xs: "0px !important", md: "20px !important" },
              paddingRight: { xs: "0px !important", md: "20px !important" },
              paddingTop: { xs: "30px !important", md: "20px !important" },
            }}
          >
            <Box
              component="form"
              noValidate
              autoComplete="off"
              sx={{ color: "#fff" }}
              onSubmit={handleSubmit}
            >
              <Typography sx={{ fontSize: "15px", fontWeight: "bold", mb: 1 }}>
                Your Name
              </Typography>
              <TextField
                name="name"
                placeholder="Enter your name"
                fullWidth
                variant="outlined"
                value={formData.name}
                onChange={handleChange}
                sx={{
                  mb: 3,
                  backgroundColor: "#1C1C22",
                  input: { color: "#fff" },
                  "& fieldset": { border: "none" },
                }}
              />

              <Typography sx={{ fontSize: "15px", fontWeight: "bold", mb: 1 }}>
                Your E-mail
              </Typography>
              <TextField
                name="email"
                placeholder="Enter your e-mail"
                fullWidth
                variant="outlined"
                value={formData.email}
                onChange={handleChange}
                sx={{
                  mb: 3,
                  backgroundColor: "#1C1C22",
                  input: { color: "#fff" },
                  "& fieldset": { border: "none" },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon sx={{ color: "#888" }} />
                    </InputAdornment>
                  ),
                }}
              />

              <Typography sx={{ fontSize: "15px", fontWeight: "bold", mb: 1 }}>
                Your Budget
              </Typography>
              <TextField
                name="budget"
                placeholder="1k–3k"
                fullWidth
                variant="outlined"
                value={formData.budget}
                onChange={handleChange}
                sx={{
                  mb: 3,
                  backgroundColor: "#1C1C22",
                  input: { color: "#fff" },
                  "& fieldset": { border: "none" },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AttachMoneyIcon sx={{ color: "#888" }} />
                    </InputAdornment>
                  ),
                }}
              />

              <Typography sx={{ fontSize: "15px", fontWeight: "bold", mb: 1 }}>
                Tell me a bit more what you are looking for?
              </Typography>
              <TextField
                name="message"
                placeholder=""
                multiline
                minRows={5}
                fullWidth
                variant="outlined"
                value={formData.message}
                onChange={handleChange}
                sx={{
                  mb: 3,
                  backgroundColor: "#1C1C22",
                  textarea: { color: "#fff" },
                  "& fieldset": { border: "none" },
                }}
              />

              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  background: "linear-gradient(135deg, #007BFF, #00B4DB)",
                  borderRadius: "50px",
                  padding: "12px 0",
                  fontWeight: "bold",
                  fontSize: "16px",
                  mt: 1,
                  textTransform: "none",
                }}
              >
                Submit Now
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={4}
          sx={{ width: "100%", margin: "0px 0px", mt: 4, pt: 10 }}
        >
          <Grid
            item
            xs={12}
            md={6}
            textAlign={{ xs: "center", md: "left" }}
            sx={{
              paddingLeft: { xs: "0px !important", md: "20px !important" },
              paddingRight: { xs: "0px !important", md: "20px !important" },
            }}
          >
            <AnimatedSection variants={faqVariants}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: "bold",
                  color: "#fff",
                  fontSize: {
                    xs: "1.5rem",
                    sm: "2.5rem",
                    md: "3rem",
                    lg: "3.5rem",
                  },
                  maxWidth: { xs: "400px", sm: "560px", md: "560px" },
                  marginLeft: { xs: "auto", md: "0px" },
                  marginRight: { xs: "auto", md: "0px" },
                  py: "10px",
                }}
              >
                Frequently Asked <br />
                <Box
                  component="span"
                  sx={{
                    background: "linear-gradient(135deg, #007BFF, #00B4DB)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Questions
                </Box>
              </Typography>
            </AnimatedSection>
            <AnimatedSection variants={faqVariants}>
              <Typography
                variant="body1"
                sx={{
                  mt: 0,
                  color: "#fff",
                  py: { xs: "5px", md: "20px" },
                  fontSize: { xs: "12px", sm: "16px", md: "18px" },
                  lineHeight: { xs: "16px", sm: "24px", md: "30px" },
                  maxWidth: { xs: "400px", sm: "400px", md: "400px" },
                  marginLeft: { xs: "auto", md: "0px" },
                  marginRight: { xs: "auto", md: "0px" },
                  fontWeight: "100",
                  paddingBottom: "50px !important",
                }}
              >
                Answers to the burning questions in your mind.
              </Typography>
            </AnimatedSection>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              paddingLeft: { xs: "0px !important", md: "20px !important" },
              paddingRight: { xs: "0px !important", md: "20px !important" },
            }}
          >
            <AnimatedSection variants={faqVariants}>
              <Box>
                {[
                  {
                    question: "How long does a website take to build?",
                    answer:
                      "The timeline depends on the complexity of the website. On average, it takes 2-6 weeks to complete.",
                  },
                  {
                    question: "How much does a website cost?",
                    answer:
                      "The cost varies based on the features and design requirements. Contact me for a detailed quote.",
                  },
                  {
                    question: "Can you help fix the issues you find?",
                    answer:
                      "Yes. I provide remediation steps and can work with your developers to fix the vulnerabilities or even patch them myself if required.",
                  },
                  {
                    question: "What services do you offer in cybersecurity?",
                    answer:
                      "I offer vulnerability assessments, web application security testing, penetration testing (on authorized systems), and consultation on securing websites, CMS platforms, and custom applications.",
                  },
                  {
                    question: "Can you test live websites?",
                    answer:
                      "Yes, but only with proper written authorization. I also offer testing in staging environments or using mock vulnerable apps for training and internal use.",
                  },
                ].map((faq, index) => (
                  <Accordion
                    key={index}
                    sx={{
                      backgroundColor: "transparent",
                      color: "#fff",
                      mb: 2,
                      borderBottom: "1px solid #444",
                      "&:before": { display: "none" },
                      boxShadow: "none",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
                      sx={{
                        fontSize: "16px",
                        fontWeight: "bold",
                      }}
                    >
                      {faq.question}
                    </AccordionSummary>
                    <AccordionDetails
                      sx={{
                        fontSize: "16px",
                        lineHeight: "24px",
                        color: "#ccc",
                      }}
                    >
                      {faq.answer}
                    </AccordionDetails>
                  </Accordion>
                ))}
              </Box>
            </AnimatedSection>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
