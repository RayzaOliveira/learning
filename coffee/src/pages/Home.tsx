import React from "react";

import { Link } from "react-router-dom";

import { Flex, Image, Heading, Text, Grid, Container } from "theme-ui";

import LinkButton from "../components/LinkButton";

import imgLogo from "../assets/logo.svg";

export default function Dashboard() {
  return (
    <Container sx={{ paddingX: "16px" }}>
      <Flex sx={{ flexDirection: "column" }}>
        <Flex
          sx={{
            display: ["flex", "grid"],
            gridTemplateAreas: "'title logo' 'description logo'",
            gridTemplateColumns: "1fr 1fr",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Heading
            as="h1"
            sx={{ fontSize: 8, marginBottom: 4, gridArea: "title" }}
          >
            Coffee
          </Heading>
          <Text sx={{ gridArea: "description" }}>
            Coofe é uma página onde você possa conectar com pessoas e contribuir
            em seus estudos ou trabalho com um cafézinho!
          </Text>
          <Image
            sx={{ maxWidth: "200px", gridArea: "logo" }}
            src={imgLogo}
            alt="coffe logo"
          />
        </Flex>
        <br />
        <Flex
          sx={{
            justifyContent: "space-between",
            marginTop: 4,
            maxWidth: "500px",
          }}
        >
          <LinkButton
            sx={{ width: "46%", backgroundColor: "secondary" }}
            to="login"
          >
            Entrar
          </LinkButton>
          <LinkButton sx={{ width: "46%" }} to="profile">
            Crie sua conta
          </LinkButton>
        </Flex>
      </Flex>
    </Container>
  );
}
