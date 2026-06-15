import type {
  QuartzComponent,
  QuartzComponentProps,
  QuartzComponentConstructor,
} from "@quartz-community/types";

const contactsCss = `
.contacts {
  margin-top: 1rem;
}
.contacts h3 {
  font-size: 1rem;
  margin: 0 0 0.5rem 0;
}
.contacts ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.contacts ul li {
  margin: 0.25rem 0;
}
.contacts ul li a {
  color: var(--dark);
  opacity: 0.75;
  text-decoration: none;
  font-size: 0.9rem;
}
.contacts ul li a:hover {
  opacity: 1;
  color: var(--secondary);
}
`;

const Contacts: QuartzComponentConstructor = () => {
  const Component: QuartzComponent = (_props: QuartzComponentProps) => {
    return (
      <div class="contacts">
        <h3>Contact</h3>
        <ul>
          <li>
            <a href="mailto:anthony.r.andrews@gmail.com">Email</a>
          </li>
          <li>
            <a href="https://github.com/Anthony-Andrews" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/anthony-r-andrews/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    );
  };

  Component.css = contactsCss;

  return Component;
};

export default Contacts;
