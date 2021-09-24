import {
  Box,
  Flex,
  Link,
  useColorMode,
  Switch,
  Input,
  Text,
} from "@chakra-ui/react";

import { useSession, signOut } from "next-auth/client";
import { useRouter } from "next/router";
import { useContext } from "react";
import { AppContext } from "../AppContext/AppContext";

export default function MenuBar() {
  const { toggleColorMode } = useColorMode();
  const router = useRouter();
  const { setSearch, cash } = useContext(AppContext);
  const [session, loading] = useSession();

  const handleLogout = () => {
    signOut();
    router.push("/login");
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <Flex bg="tan" p="4" borderRadius="5" w={[500, 700, 900, 2330]}>
      <Switch colorScheme="teal" size="lg" onChange={toggleColorMode} />
      <Link marginRight={[50, 100, 200]} style={ {'text-shadow':'2px 2px 5px','text-size':'50px'}} textDecoration="none"  href="/">
        Yo Yo Gift Card
      </Link>

      {!session && (
        <Box ml="auto">
          <Link marginRight={[2, 4, 8]} href="/login">
            SignIn
          </Link>

          <Link href="/signup">Register</Link>
        </Box>
      )}
      {session && !loading && (
        <>
          <Box mr="auto" display="flex" flexDirection="row">
            <Link marginLeft={[1, 4, 6]} href="/redeem">
              Redeem
            </Link>
            <Input
              w={[50, 100, 200]}
              marginLeft={[2, 4, 6]}
              borderRadius={[2, 6, 10]}
              placeholder="search"
              onChange={handleChange}
            ></Input>
          </Box>
          <Text marginRight={[20, 50, 100]} textColor>{`COINS:${cash}`}</Text>
          <Box>
            <Link onClick={handleLogout} variant="link">
              Logout
            </Link>
          </Box>
        </>
      )}
    </Flex>
  );
}
