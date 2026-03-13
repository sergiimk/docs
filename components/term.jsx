export const Term = ({ t, id }) => {
  const anchor = id ? id : t.toLowerCase().replace(/\s+/g, "-");
  const link = `/content/glossary#${anchor}`;

  return <a class="glossary-term" href={link}>{t}</a>;
};
