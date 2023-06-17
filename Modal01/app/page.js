"use client";
import ModalSkeleton from "../components/modal/ModalSkeleton";
import ModalContent1 from "../components/modal/modalContent";
import Button from "../components/button/Button";
import React, { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Button text="Open Modal" onClick={handleClick} />

      {isOpen && (
        <ModalSkeleton
          modalBody={<ModalContent1 />}
          closeClick={() => setIsOpen(!isOpen)}
        />
      )}
    </>
  );
}
