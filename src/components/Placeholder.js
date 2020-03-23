
    <motion.div className="example-container" exit={exit}>
    <motion.div
      className="box"
      style={{ x }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
    >
      <svg
        className="progress-icon"
        viewBox="0 0 200 200"
        preserveAspectRatio="xMidYMid meet"
      >
        <motion.path
          fill="none"
          strokeWidth="8"
          stroke={color}
          d="M 0, 20 a 20, 20 0 1,0 180,0 a 20, 20 0 1,0 -180,0"
          style={{ translateX: 5, translateY: 5 }}
        />
        <motion.path
          fill="none"
          strokeWidth="2"
          stroke={color}
          d="M2 8h 60 v12 H2z m0 12 v36 h60 V20 M38 30l7 8-7 8M26 30l-7 8 7 8"
          strokeDasharray="0 1"
          style={{ pathLength: tickPath }}
        />
        <motion.path
          fill="none"
          strokeWidth="2"
          stroke={color}
          d=""
          strokeDasharray="0 1"
          style={{ pathLength: crossPathA }}
        />
        {/*<motion.path
          fill="none"
          strokeWidth="2"
          stroke={color}
          d="M33,17 L17,33"
          strokeDasharray="0 1"
          style={{ pathLength: crossPathB }}
        /> */}
      </svg>
      {/* <Container>
        <Row>
          <Col>
            <h1 className="text-center">Welcome</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <Link to={"/about"}>
              <h2 className="text-center">About</h2>
            </Link>
          </Col>

          <Col xs={6}>
            <Row>
              <Link to={"/projects"}>
                <i className="fas fa-laptop-code"></i>
                <h2 className="text-center">Projects</h2>
              </Link>
            </Row>
          </Col>
        </Row>
      </Container> */}
    </motion.div>
  </motion.div>
);