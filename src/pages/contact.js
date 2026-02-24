import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Link from "@docusaurus/Link";
import React from "react";

export default function Contact() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <div className="container">
        <p className="margin-top--lg">
          <Link to="/">← Back to Home</Link>
        </p>
        <h1 className="margin-top--xl">Contact Us</h1>
        <p>
          If you have any questions, feedback, or suggestions, please reach out
          to us!
        </p>
        <form style={{ maxWidth: 400 }}>
          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="name">Name:</label>
            <br />
            <input
              type="text"
              id="name"
              name="name"
              style={{ 
                width: "100%", 
                border: "1px solid #888",
                padding: "12px 16px",
                fontSize: "16px",
                borderRadius: "4px",
                minHeight: "48px",
                boxSizing: "border-box"
              }}
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="email">Email:</label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              style={{ 
                width: "100%", 
                border: "1px solid #888",
                padding: "12px 16px",
                fontSize: "16px",
                borderRadius: "4px",
                minHeight: "48px",
                boxSizing: "border-box"
              }}
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="message">Message:</label>
            <br />
            <textarea
              id="message"
              name="message"
              rows={6}
              style={{ 
                width: "100%", 
                border: "1px solid #888",
                padding: "12px 16px",
                fontSize: "16px",
                borderRadius: "4px",
                minHeight: "120px",
                boxSizing: "border-box",
                resize: "vertical"
              }}
            />
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </Layout>
  );
}
