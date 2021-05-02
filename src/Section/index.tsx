import SectionComponent from "./Section";
import SectionHeader from "./SectionHeader";
import SectionBody from "./SectionBody";

type SectionType = typeof SectionComponent;

interface Section extends SectionType {
  Header: typeof SectionHeader;
  Body: typeof SectionBody;
}

const Section = SectionComponent as Section;
Section.Header = SectionHeader;
Section.Body = SectionBody;

export type { SectionProps } from "./Section";
export default Section;
