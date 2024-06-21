/* eslint-disable no-unused-vars */
import React from 'react'
import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from "../assets/img/faceimage-2.jpg"

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  // const toRotate = ["Web Developer", "Competitive Programmer"]
  const toRotate = ["Aditya Lohar", "Aditya Lohar"]
  const [text, setText] = useState('')
  const [delta, setDelta] = useState(300 - Math.random() * 100)
  const period = 2000;

  useEffect(()=>{
    let ticker = setInterval(() => {
      tick();
    }, delta)

    return () => {clearInterval(ticker)}; 
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText)

    if(!isDeleting && fullText === updatedText) {
      setIsDeleting(true);
      setDelta(300);
    }
    else if(isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(300);
    }
  }

  return (
    <section className='banner' id='home'>
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} md={6} xl={7}>
            <span className='tagline'>Welcome to my Portfolio</span>
            {/* <h1>{`Hi I'm `}<span className='wrap'>{text}</span></h1> */}
            <h1>Hi I'm Aditya Lohar</h1>
            {/* <p>An aspiring developer and current undergrad at IIT Roorkee, I am on a path of continuous learning and growth. Eager to transform ideas into reality, I find joy in coding and refining my problem-solving skills.</p> */}
            {/* <p>I'm an undergrad at IIT Roorkee with a growing interest in <b>blockchain</b> and <b>Web3</b> technologies. I am on a path of continuous learning and growth. Eager to transform ideas into reality, I find joy in coding and refining my problem-solving skills.</p> */}
            <p>Passionate about software development and fascinated by <b>blockchain</b> and <b>Web3</b> technologies. Skilled in <b>frontend and backend development </b>, specializing in creating user-friendly web applications. Eager to learn, grow, and contribute to impactful projects.</p>
            <button onClick={() => console.log("connect")}> <a href="https://www.linkedin.com/in/aditya-lohar-4b80871b8" target="_blank" style={{ textDecoration: "none" }}> Let's connect <ArrowRightCircle size={25} /></a></button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}
