import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const startContinuousAnimation = () => {
  gsap.from(".aboutPara", {
    opacity: 0,
    x: -200,
    duration: 1,
  });
  gsap.to(".aboutPara", {
    opacity: 1,
    y: 0,
    duration: 1,
  });
};
const startFeatureProductAnimation = () => {
  gsap.from(".feature-product", {
    opacity: 0,
    duration: 1,
  });
  gsap.to(".feature-product", {
    opacity: 1,
    duration: 1,
  });
};

const startNewProductAnimation = () => {
  gsap.from(".new-product-img", {
    x: -200,
    duration: 1,
  });
  gsap.to(".new-product-img", {
    opacity: 1,
    x: 0,
    duration: 1,
  });
  gsap.from(".new-product-detail", {
    duration: 1,
  });
  gsap.to(".new-product-detail", {
    opacity: 1,
    x: 0,
    duration: 1,
    delay: 1,
  });
};

const startSinexProductAnimation = () => {
  gsap.from(".sinex-details", {
    x: -200,
    duration: 1,
  });
  gsap.to(".sinex-details", {
    opacity: 1,
    x: 0,
    duration: 1,
  });
  gsap.from(".sinex-image", {
    duration: 1,
  });
  gsap.to(".sinex-image", {
    opacity: 1,
    x: 0,
    duration: 1,
    delay: 1,
  });
};
const startCSRAnimation = () => {
  gsap.from(".csr-image", {
    scale: 0.7,
    duration: 1.2,
  });
  gsap.to(".csr-image", {
    opacity: 1,
    scale: 1,
    duration: 1.2,
  });
  gsap.from(".csr-logo", {
    y: -100,
    duration: 1,
  });
  gsap.to(".csr-logo", {
    opacity: 1,
    x: 0,
    duration: 1,
    delay: 1.2,
  });
  gsap.from(".csr-title", {
    y: -100,
    duration: 1,
  });
  gsap.to(".csr-title", {
    opacity: 1,
    x: 0,
    duration: 1,
    delay: 1.2,
  });
  gsap.from(".csr-details", {
    y: -100,
    duration: 1,
  });
  gsap.to(".csr-details", {
    opacity: 1,
    x: 0,
    duration: 1,
    delay: 1.9,
  });
  gsap.from(".csr-button", {
    y: -100,
    duration: 1,
  });
  gsap.to(".csr-button", {
    opacity: 1,
    x: 0,
    duration: 1,
    delay: 2,
  });
};

ScrollTrigger.create({
  trigger: "#about", // The element that triggers the animation
  start: "top 60%", // Start when the top of the box reaches 80% of the viewport
  once: true, // Trigger this only once
  onEnter: () => startContinuousAnimation(), // Start the animation
});

ScrollTrigger.create({
  trigger: "#newProduct", // The element that triggers the animation
  start: "top 60%", // Start when the top of the box reaches 80% of the viewport
  once: true, // Trigger this only once
  onEnter: () => startNewProductAnimation(), // Start the animation
});

ScrollTrigger.create({
  trigger: "#featureProduct", // The element that triggers the animation
  start: "top 60%", // Start when the top of the box reaches 80% of the viewport
  once: true, // Trigger this only once
  onEnter: () => startFeatureProductAnimation(), // Start the animation
});
ScrollTrigger.create({
  trigger: "#sinexProduct", // The element that triggers the animation
  start: "top 60%", // Start when the top of the box reaches 80% of the viewport
  once: true, // Trigger this only once
  onEnter: () => startSinexProductAnimation(), // Start the animation
});
ScrollTrigger.create({
  trigger: "#csr", // The element that triggers the animation
  start: "top 60%", // Start when the top of the box reaches 80% of the viewport
  once: true, // Trigger this only once
  onEnter: () => startCSRAnimation(), // Start the animation
});
