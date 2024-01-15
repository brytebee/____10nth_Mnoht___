"use client"

import React from 'react';
import styled, { keyframes } from 'styled-components';
import Image from 'next/image';

const orbitAnimation = keyframes`
  from {
    transform: translate(-50%, -45%) rotate(0deg);
  }
  to {
    transform: translate(-55%, -50%) rotate(180deg);
  }
`;

const Container = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
`;

const StaticImage = styled(Image)`
  position: absolute;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  top: 20%;
  left: 19%;
`;

const OrbitingImage = styled(Image)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-40%, -30%);
  animation: ${orbitAnimation} 10s linear infinite;
`;

const OrbitingImages = ({ staticImageSrc, orbitingImageSrc }) => {
  return (
    <Container>
      <StaticImage src={staticImageSrc}  alt="Static" />
      <OrbitingImage src={orbitingImageSrc}  alt="Orbiting" />
    </Container>
  );
};

export default OrbitingImages;
