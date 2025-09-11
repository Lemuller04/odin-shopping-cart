import "../../styles/components/footer.css";

const Footer = () => {
  return (
    <footer>
      <p>
        Project by{" "}
        <a
          href="https://github.com/Lemuller04"
          target="_blank"
          rel="noopener noreferrer"
        >
          Leonardo Müller
        </a>{" "}
        as part of{" "}
        <a
          href="https://theodinproject.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          The Odin Project
        </a>{" "}
        React curriculum.
      </p>
    </footer>
  );
};

export default Footer;
