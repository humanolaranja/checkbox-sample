import React, { useEffect, useState } from 'react';
import { Checkbox } from './components/Checkbox';

export const App = () => {
  const [elements, setElements] = useState<string[]>([]);
  const [selectedElements, setSelectedElements] = useState<string[]>([]);

  const isSelected = (element: string) => {
    return selectedElements.includes(element);
  }

  const changeElementSelection = (element: string) => {
    if(isSelected(element)) {
      const newSelectedElements = selectedElements.filter(e => e !== element)
      setSelectedElements(newSelectedElements)
    } else {
      const newSelectedElements = [...selectedElements, element]
      setSelectedElements(newSelectedElements)
    }
  }

  useEffect(() => {
    const elementsToBeGetFromService: string[] = ['element1', 'element2', 'element3']
    setElements(elementsToBeGetFromService)
  }, [setElements])

  return (
    <div>
      {elements.map((element) => (
        <Checkbox key={element} name={element} selected={isSelected(element)} onClick={changeElementSelection} />
      ))}
    </div>
  )
}

export default App;
