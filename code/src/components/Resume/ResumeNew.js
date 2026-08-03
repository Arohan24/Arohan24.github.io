import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink = `${process.env.PUBLIC_URL}/ArohanUpdatedResume.pdf`;
const isElectron = /Electron/i.test(navigator.userAgent);

function ResumePreview() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Chrome/Edge/Firefox: use the browser's built-in PDF viewer
  if (!isElectron) {
    return (
      <embed
        src={`${resumeLink}#toolbar=1&view=FitH`}
        type="application/pdf"
        title="Arohan Harsh Dubey Resume"
        style={{
          width: "min(920px, 95%)",
          height: "85vh",
          border: "none",
          borderRadius: "8px",
          background: "#ffffff",
        }}
      />
    );
  }

  // Cursor/Electron: native PDF plugins are unavailable — use react-pdf canvas
  if (error) {
    return (
      <div style={{ textAlign: "center", color: "white", padding: 24 }}>
        <p>Unable to preview the PDF in-browser.</p>
        <Button
          variant="primary"
          href={resumeLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Open CV in a new tab
        </Button>
      </div>
    );
  }

  return (
    <Document
      file={resumeLink}
      className="d-flex flex-column align-items-center"
      loading={<div style={{ color: "white", padding: 24 }}>Loading CV...</div>}
      onLoadSuccess={({ numPages: nextNumPages }) => {
        setError(null);
        setNumPages(nextNumPages);
      }}
      onLoadError={(err) => {
        console.error("Resume PDF load error:", err);
        setError(err);
      }}
    >
      {Array.from(new Array(numPages || 0), (_el, index) => (
        <Page
          key={`page_${index + 1}`}
          pageNumber={index + 1}
          scale={width > 786 ? 1.4 : 0.55}
          renderTextLayer={false}
          renderAnnotationLayer={false}
        />
      ))}
    </Document>
  );
}

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row
          style={{
            justifyContent: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Button
            variant="primary"
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row
          className="resume"
          style={{
            justifyContent: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <ResumePreview />
        </Row>

        <Row
          style={{
            justifyContent: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Button
            variant="primary"
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
