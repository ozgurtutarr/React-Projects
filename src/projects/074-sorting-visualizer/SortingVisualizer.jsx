import { useState, useEffect } from 'react';
import './SortingVisualizer.css';

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);
  const [isSorting, setIsSorting] = useState(false);
  const [speed, setSpeed] = useState(50);

  useEffect(() => {
    resetArray();
  }, []);

  const resetArray = () => {
    if (isSorting) return;
    const newArray = [];
    for (let i = 0; i < 50; i++) {
      newArray.push(Math.floor(Math.random() * 300) + 10);
    }
    setArray(newArray);
  };

  // Helper for delay
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // Bubble Sort
  const bubbleSort = async () => {
    setIsSorting(true);
    const arr = [...array];
    const bars = document.getElementsByClassName('array-bar');

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        bars[j].style.backgroundColor = 'red';
        bars[j + 1].style.backgroundColor = 'red';

        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          setArray([...arr]);
          await sleep(100 - speed); // Delay
        }

        bars[j].style.backgroundColor = '#007bff';
        bars[j + 1].style.backgroundColor = '#007bff';
      }
      bars[arr.length - i - 1].style.backgroundColor = 'green';
    }
    setIsSorting(false);
  };

  // Quick Sort (Simplified display)
  const quickSort = async () => {
    setIsSorting(true);
    const arr = [...array];
    await quickSortHelper(arr, 0, arr.length - 1);
    setArray(arr);
    setIsSorting(false);
  };

  const quickSortHelper = async (arr, low, high) => {
    if (low < high) {
      let pi = await partition(arr, low, high);
      await quickSortHelper(arr, low, pi - 1);
      await quickSortHelper(arr, pi + 1, high);
    } else if (low >= 0 && high >= 0 && low === high) {
      const bars = document.getElementsByClassName('array-bar');
      bars[low].style.backgroundColor = 'green';
    }
  };

  const partition = async (arr, low, high) => {
    let pivot = arr[high];
    const bars = document.getElementsByClassName('array-bar');
    bars[high].style.backgroundColor = 'yellow'; // pivot

    let i = low - 1;
    for (let j = low; j < high; j++) {
      bars[j].style.backgroundColor = 'red';
      if (arr[j] < pivot) {
        i++;
        // swap
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        setArray([...arr]);
        await sleep(100 - speed);

        bars[i].style.backgroundColor = 'orange'; // swapped
      }
      bars[j].style.backgroundColor = '#007bff';
    }

    // swap pivot
    let temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    setArray([...arr]);
    await sleep(100 - speed);

    // reset colors
    for (let k = low; k <= high; k++) {
      if (k !== i + 1) bars[k].style.backgroundColor = '#007bff';
    }
    bars[i + 1].style.backgroundColor = 'green'; // sorted pivot

    return i + 1;
  };

  return (
    <div className="sorting-visualizer-container">
      <h2>Sorting Visualizer</h2>

      <div className="controls">
        <button onClick={resetArray} disabled={isSorting}>
          Generate New Array
        </button>
        <button onClick={bubbleSort} disabled={isSorting}>
          Bubble Sort
        </button>
        <button onClick={quickSort} disabled={isSorting}>
          Quick Sort
        </button>
        <label>
          Speed:
          <input
            type="range"
            min="10"
            max="100"
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
            disabled={isSorting}
          />
        </label>
      </div>

      <div className="array-container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{ height: `${value}px` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SortingVisualizer;
