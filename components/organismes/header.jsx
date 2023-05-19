import React from "react";
import Logo from "@atoms/Logo";
import Container from "@templates/container";
import Nav_items from "@atoms/Nav_item";
import Link from "next/link";

export default function Header() {
  return (
    <Container
      size="lg"
      expend="fixed mix-blend-difference z-[900] w-screen justify-between items-center "
      intern="flex flex-row justify-between items-center pt-8"
    >
      <Link href="#" scroll={true}>
        <Logo />
      </Link>
      <div className="flex flex-row gap-6 sm:gap-16">
        <Nav_items name={"Project"} link="#Project" />
        <Nav_items name={"About me"} />
      </div>
    </Container>
  );
}
