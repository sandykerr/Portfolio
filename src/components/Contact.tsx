export default function Contact() {
  return (
    <div className="container mx-auto py-16 px-6 text-center bg-eerie text-platinum transition-colors duration-300">
      <h2 className="text-3xl font-bold mb-4 text-sea">Get in Touch</h2>

      <p className="prose prose-lg prose-invert mb-6">
        I’d love to connect! Feel free to reach out via email:
      </p>

      <a
        href="mailto:your.email@example.com"
        className="
          inline-block px-6 py-3
          bg-feld text-platinum
          rounded hover:bg-sea hover:text-eerie
          transition-colors duration-200
        "
      >
        Email Me
      </a>
    </div>
  );
}
