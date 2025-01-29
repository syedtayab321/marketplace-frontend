import React, { useState } from "react";
import {Box, Heading, Text, Stack, HStack, Button, FormControl, FormLabel, Textarea,
  useColorModeValue, IconButton, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody,
  ModalFooter,
  useToast,
} from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

const reviewsData = [
  {
    id: "1",
    name: "John Doe",
    rating: 5,
    comment: "Amazing product! Totally worth the price. Highly recommend it!",
  },
  {
    id: "2",
    name: "Jane Smith",
    rating: 4,
    comment: "Good quality, but the delivery took a bit longer than expected.",
  },
  {
    id: "3",
    name: "Mike Johnson",
    rating: 3,
    comment: "Decent product, but not as expected. Could be improved.",
  },
];

const ReviewPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);
  const toast = useToast();

  const bgColor = useColorModeValue("white", "gray.800");
  const cardShadow = useColorModeValue("lg", "2xl");
  const headingColor = useColorModeValue("gray.700", "white");

  const submitReview = () => {
    toast({
      title: "Review Submitted.",
      description: "Your review has been submitted successfully.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });

    onClose();
    setReviewText("");
    setRating(0);
  };

  return (
    <Box p={8} maxW="1200px" mx="auto">
      <Heading
        mb={6}
        textAlign="center"
        fontSize="3xl"
        bgGradient="linear(to-r, blue.400, cyan.400)"
        bgClip="text"
        color={headingColor}
      >
        Customer Reviews
      </Heading>

      {/* Reviews Section */}
      <Box mb={8}>
        <Text fontSize="xl" mb={4} fontWeight="bold" color={headingColor}>
          What Our Customers Are Saying:
        </Text>

        <Stack spacing={6}>
          {reviewsData.map((review) => (
            <Box
              key={review.id}
              p={4}
              borderRadius="lg"
              boxShadow={cardShadow}
              bg={bgColor}
              _hover={{ transform: "scale(1.02)", transition: "0.2s ease-in-out" }}
            >
              <HStack justify="space-between">
                <Text fontWeight="bold">{review.name}</Text>
                <HStack spacing={1}>
                  {[...Array(5)].map((_, index) => (
                    <FaStar
                      key={index}
                      color={index < review.rating ? "orange" : "gray.300"}
                    />
                  ))}
                </HStack>
              </HStack>
              <Text mt={2}>{review.comment}</Text>
            </Box>
          ))}
        </Stack>
      </Box>

      {/* Button to open review submission modal */}
      <Button colorScheme="blue" onClick={onOpen} size="lg" mb={8} display="block" mx="auto">
        Write a Review
      </Button>

      {/* Modal for writing a review */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Submit Your Review</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl mb={4}>
              <FormLabel>Rating</FormLabel>
              <HStack spacing={2}>
                {[...Array(5)].map((_, index) => (
                  <IconButton
                    key={index}
                    icon={<FaStar />}
                    aria-label="Rating"
                    onClick={() => setRating(index + 1)}
                    color={index < rating ? "orange.400" : "gray.300"}
                    fontSize="xl"
                    variant="unstyled"
                  />
                ))}
              </HStack>
            </FormControl>

            <FormControl mb={4}>
              <FormLabel>Your Review</FormLabel>
              <Textarea
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                placeholder="Write your review here..."
                size="lg"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" onClick={submitReview}>
              Submit
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ReviewPage;
