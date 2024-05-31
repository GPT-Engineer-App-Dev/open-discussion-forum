import { Container, VStack, Box, Heading, Textarea, Button, Text, HStack, Flex } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");

  const handlePostSubmit = () => {
    if (newPost.trim() !== "") {
      setPosts([{ content: newPost, id: Date.now() }, ...posts]);
      setNewPost("");
    }
  };

  return (
    <Container maxW="container.lg" p={4}>
      <VStack spacing={8} align="stretch">
        <Box as="header" bg="blue.500" color="white" p={4} borderRadius="md">
          <Heading as="h1" size="lg">Public Post Board</Heading>
        </Box>

        <Box as="main" flex="1">
          <VStack spacing={4} align="stretch">
            <Box p={4} borderWidth="1px" borderRadius="md">
              <Textarea
                placeholder="What's on your mind?"
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                mb={2}
              />
              <Button colorScheme="blue" onClick={handlePostSubmit}>Post</Button>
            </Box>

            {posts.map((post) => (
              <Box key={post.id} p={4} borderWidth="1px" borderRadius="md">
                <Text>{post.content}</Text>
              </Box>
            ))}
          </VStack>
        </Box>

        <Box as="footer" textAlign="center" p={4} borderTopWidth="1px">
          <Text fontSize="sm">© 2023 Public Post Board</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;