import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Dot } from '../dot';
import './visualizer.css';

export function Visualizer({ items, selectedItem }){
  const [images, setImages] = useState([]);

  useEffect(() => {
    const images = items.reduce((acc, item, index) => {
      Object.keys(item).forEach((key) => {
        if (Array.isArray(item[key]) && item[key][0]?.file) {
          item[key].forEach((itemImage, indexItem) => {
            const isSelected = selectedItem.index === index
              && key === selectedItem.groupItemTitle
              && selectedItem.groupItemIndex === indexItem;

            acc.push({ file: itemImage.file, selected: isSelected });
          });
        }
      });

      return acc;
    }, []);

    setImages(images);
  }, [items, selectedItem]);

  return (
    <main className="main">
      <div className="main__content">
        {images.map((image, index) => (
          <div key={image.file} className="main__content__img" style={{"--animation-order": index}}>
            <img src={`http://localhost:4000/${image.file}`} />
            { image.selected && <Dot /> }
          </div>
        ))}
      </div>
    </main>
  )
}

Visualizer.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClick: PropTypes.func
};

Visualizer.defaultProps = {};
