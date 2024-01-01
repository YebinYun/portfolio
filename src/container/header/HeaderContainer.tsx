import React, { Dispatch, ReactElement, SetStateAction, useState } from 'react'
import HeaderComponent from '../../components/header/HeaderComponent'

interface Section {
  name: string;
  component: ReactElement;
}

type Props = {
  setSection: Dispatch<SetStateAction<ReactElement>>;
  sections: Section[];
};

const HeaderContainer = ({ setSection, sections }: Props) => {
    const [activeButton, setActiveButton] = useState(sections[0].name);

  return (
    <HeaderComponent
          setSection={setSection}
          sections={sections}
          activeButton={activeButton}
          setActiveButton={setActiveButton} />
  );
};

export default HeaderContainer