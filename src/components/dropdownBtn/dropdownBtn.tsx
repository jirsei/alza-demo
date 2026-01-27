import './dropdownBtn.scss';
import { useEffect, useRef, useState, type JSX } from 'react';
import Button from 'react-bootstrap/esm/Button';

interface DropdownBtnOption {
  name: string;
  action: Function;
}

interface DropdownBtnProps {
  text: string;
  options: DropdownBtnOption[];
  width?: string;
}

function DropdownBtn({ text, options, width = 'auto' }: DropdownBtnProps) {
  const [popupVisible, setPopupVisible] = useState<boolean>(false);
  const [optionsElements, setOptionsElements] = useState<JSX.Element[] | null>(
    null,
  );
  const popupRef = useRef<HTMLDivElement>(null);

  const toggleOptions = () => {
    setPopupVisible((prev) => !prev);
  };

  useEffect(() => {
    setOptionsElements(
      [...options].map((value: DropdownBtnOption, index: number) => (
        <Button
          className="option-btn d-flex justify-content-start text-nowrap"
          key={index}
          onClick={() => {
            value.action(value);
            toggleOptions();
          }}
        >
          {value.name}
        </Button>
      )),
    );
  }, [options]);

  useEffect(() => {
    if (popupVisible) {
      const handleClick = (event: MouseEvent) => {
        if (
          popupRef.current &&
          !popupRef.current.contains(event.target as Node)
        ) {
          setPopupVisible(false);
        }
      };

      document.addEventListener('click', handleClick, true);

      return () => {
        document.removeEventListener('click', handleClick, true);
      };
    }
  }, [popupRef, popupVisible]);

  return (
    <div className="dropdown-btn" ref={popupRef}>
      <Button
        className="main-btn d-flex justify-content-between"
        style={{ width }}
        onClick={() => toggleOptions()}
      >
        {text}
        <span className="btn-arrow ml-auto">▼</span>
      </Button>

      <div
        className={
          'options-popup d-flex flex-column ' +
          (popupVisible ? 'd-block' : 'd-none')
        }
      >
        {optionsElements}
      </div>
    </div>
  );
}

export default DropdownBtn;
