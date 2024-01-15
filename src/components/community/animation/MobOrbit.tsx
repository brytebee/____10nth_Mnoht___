'use client';

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
  width: 300px;
  height: 300px;
`;

const StaticImage = styled(Image)`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  top: 8%;
  left: 30%;
`;

const OrbitingImage = styled(Image)`
  position: absolute;
  top: 40%;
  left: 64%;
  transform: translate(-40%, -30%);
  animation: ${orbitAnimation} 10s linear infinite;
`;
// @ts-ignore
const MobOrbit = ({ staticImageSrc, orbitingImageSrc }) => {
  return (
    <Container>
      <StaticImage src={staticImageSrc} alt="Static" />
      <OrbitingImage src={orbitingImageSrc} alt="Orbiting" />
    </Container>
  );
};

export default MobOrbit;
