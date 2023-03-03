import React, { ReactNode } from "react";
type SectionProps = {
  title?: string;
  children: ReactNode;
};
function Section({ title = "My Subheading", children }: SectionProps) {
  return (
    <section>
      <h1>{title}</h1>
      <h2>{children}</h2>
    </section>
  );
}

export default Section;
