import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  VStack,
  RadioGroup,
  Radio,
  HStack,
  Divider,
  Text,
  Heading,
  Center,
  Link,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { Link as RouterLink } from "react-router-dom";

const AUTH_IMAGE_URL =
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80";

const SellerAuthPage = ({ isSignup }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [method, setMethod] = useState("email");
  const [phone, setPhone] = useState("");

  const onSubmit = (data) => {
    console.log({ ...data, phone });
  };

  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex minH="100vh" bg="black">
      {!isMobile && (
        <Box
          flex="1"
          bg="gray.900"
          backgroundImage={`url(${AUTH_IMAGE_URL})`}
          backgroundSize="cover"
          backgroundPosition="center"
          position="relative"
        >
          <Box
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            bg="blackAlpha.700"
          />
          <Box
            position="absolute"
            bottom="8"
            left="8"
            color="white"
            zIndex="2"
          >
            <Heading fontSize="3xl" mb={2}>
              Welcome to Seller Portal
            </Heading>
            <Text fontSize="lg">
              {isSignup
                ? "Start your journey with us today."
                : "Login to manage your business."}
            </Text>
          </Box>
        </Box>
      )}

      <Center flex="1" p={{ base: 4, md: 8 }}>
        <Box
          bg="white"
          p={8}
          borderRadius="lg"
          boxShadow="xl"
          w={{ base: "100%", md: "400px" }}
          maxW="100%"
        >
          <Heading mb={6} textAlign="center" fontSize="2xl" color="gray.800">
            {isSignup ? "Create a Seller Account" : "Login to Seller Account"}
          </Heading>
          <form onSubmit={handleSubmit(onSubmit)}>
            <VStack spacing={4}>
              <RadioGroup onChange={setMethod} value={method} w="100%">
                <HStack spacing={4} justifyContent="center">
                  <Radio value="email">Email</Radio>
                  <Radio value="phone">Phone</Radio>
                </HStack>
              </RadioGroup>

              {method === "email" ? (
                <FormControl isInvalid={errors.email}>
                  <FormLabel>Email</FormLabel>
                  <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "Invalid email address",
                      },
                    }}
                    render={({ field }) => (
                      <Input
                        {...field}
                        placeholder="Enter your email"
                        focusBorderColor="gray.800"
                      />
                    )}
                  />
                  <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
                </FormControl>
              ) : (
                <FormControl>
                  <FormLabel>Phone Number</FormLabel>
                  <PhoneInput
                    international
                    defaultCountry="US"
                    value={phone}
                    onChange={setPhone}
                    style={{
                      width: "100%",
                      padding: "10px",
                      border: "1px solid #ccc",
                      borderRadius: "5px",
                    }}
                  />
                </FormControl>
              )}

              <FormControl isInvalid={errors.password}>
                <FormLabel>Password</FormLabel>
                <Controller
                  name="password"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  }}
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="password"
                      placeholder="Enter your password"
                      focusBorderColor="gray.800"
                    />
                  )}
                />
                <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
              </FormControl>
              <Link to='/seller-dashboard'>
                <Button
                type="submit"
                bg="black"
                color="white"
                w="100%"
                size="lg"
                mt={4}
                _hover={{ bg: "gray.800" }}
              >
                {isSignup ? "Sign Up" : "Login"}
              </Button>
              </Link>

            </VStack>
          </form>

          <Divider my={6} />

          <Box textAlign="center">
            <Text mb={4}>OR</Text>
            <Button
              leftIcon={<FcGoogle />}
              variant="outline"
              w="100%"
              size="lg"
              _hover={{ bg: "gray.100" }}
            >
              {isSignup ? "Sign up" : "Login"} with Google
            </Button>
          </Box>

          <Text mt={6} textAlign="center" color="gray.600">
            {isSignup ? (
              <>
                Already have an account?{" "}
                <Link as={RouterLink} to="/seller-login" color="gray.800" fontWeight="bold">
                  Login Now
                </Link>
              </>
            ) : (
              <>
                Don't have an account?{" "}
                <Link as={RouterLink} to="/seller-signup" color="gray.800" fontWeight="bold">
                  Create Account
                </Link>
              </>
            )}
          </Text>
        </Box>
      </Center>
    </Flex>
  );
};

export const SellerSignupPage = () => <SellerAuthPage isSignup={true} />;
export const SellerLoginPage = () => <SellerAuthPage isSignup={false} />;