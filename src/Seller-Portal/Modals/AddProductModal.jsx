import React, { useState } from 'react';
import {Button, FormControl, FormLabel, Input, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Select,
  useDisclosure, Text, useToast, VStack,
} from '@chakra-ui/react';
import { useForm, Controller } from 'react-hook-form';
import SuccessToast from "../components/SuccessToast";

const AddProductModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    <SuccessToast title="Product Added Successfully!"
      description="The product has been successfully added to the catalog."/>;
       onClose();
  };

  return (
    <>
      <Button onClick={onOpen} colorScheme="teal" size="lg">
        Add New Product
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <VStack spacing={4}>
                {/* Product Name */}
                <FormControl isInvalid={errors.name}>
                  <FormLabel htmlFor="name">Product Name</FormLabel>
                  <Controller
                    name="name"
                    control={control}
                    rules={{ required: 'Product Name is required' }}
                    render={({ field }) => <Input {...field} id="name" />}
                  />
                  {errors.name && <Text color="red.500">{errors.name.message}</Text>}
                </FormControl>

                {/* Product Description */}
                <FormControl isInvalid={errors.description}>
                  <FormLabel htmlFor="description">Product Description</FormLabel>
                  <Controller
                    name="description"
                    control={control}
                    rules={{
                      required: 'Description is required',
                      minLength: { value: 10, message: 'Description must be at least 10 characters long' },
                    }}
                    render={({ field }) => <Input {...field} id="description" />}
                  />
                  {errors.description && <Text color="red.500">{errors.description.message}</Text>}
                </FormControl>

                {/* Product Category */}
                <FormControl isInvalid={errors.category}>
                  <FormLabel htmlFor="category">Product Category</FormLabel>
                  <Controller
                    name="category"
                    control={control}
                    rules={{ required: 'Category is required' }}
                    render={({ field }) => (
                      <Select {...field} id="category">
                        <option value="engine">Engine Parts</option>
                        <option value="body">Body Parts</option>
                        <option value="electronics">Electronics</option>
                      </Select>
                    )}
                  />
                  {errors.category && <Text color="red.500">{errors.category.message}</Text>}
                </FormControl>

                {/* Price */}
                <FormControl isInvalid={errors.price}>
                  <FormLabel htmlFor="price">Price</FormLabel>
                  <Controller
                    name="price"
                    control={control}
                    rules={{
                      required: 'Price is required',
                      min: { value: 1, message: 'Price must be greater than 0' },
                    }}
                    render={({ field }) => <Input {...field} id="price" type="number" />}
                  />
                  {errors.price && <Text color="red.500">{errors.price.message}</Text>}
                </FormControl>

                {/* Stock */}
                <FormControl isInvalid={errors.stock}>
                  <FormLabel htmlFor="stock">Stock Quantity</FormLabel>
                  <Controller
                    name="stock"
                    control={control}
                    rules={{
                      required: 'Stock quantity is required',
                      min: { value: 1, message: 'Stock must be greater than 0' },
                    }}
                    render={({ field }) => <Input {...field} id="stock" type="number" />}
                  />
                  {errors.stock && <Text color="red.500">{errors.stock.message}</Text>}
                </FormControl>

                {/* Product Image URL */}
                <FormControl isInvalid={errors.imageUrl}>
                  <FormLabel htmlFor="imageUrl">Product Image URL</FormLabel>
                  <Controller
                    name="imageUrl"
                    control={control}
                    rules={{
                      required: 'Image URL is required',
                      pattern: {
                        value: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,
                        message: 'Invalid URL format',
                      },
                    }}
                    render={({ field }) => <Input {...field} id="imageUrl" />}
                  />
                  {errors.imageUrl && <Text color="red.500">{errors.imageUrl.message}</Text>}
                </FormControl>
              </VStack>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              colorScheme="green"
              type="submit"
              form="addProductForm"
              isLoading={false}
              loadingText="Submitting"
            >
              Add Product
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddProductModal;
