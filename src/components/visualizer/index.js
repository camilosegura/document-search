import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './visualizer.css';

export function Visualizer({ items, selectedItem }){
  const [images, setImages] = useState([]);

  useEffect(() => {
    const images = items.reduce((acc, item) => {
      Object.keys(item).forEach((key) => {
        if (Array.isArray(item[key]) && item[key][0]?.file) {
          item[key].forEach((itemImage) => {
            acc.push(itemImage.file);
          });
        }
      });

      return acc;
    }, []);

    setImages(images);
  }, [items]);

  return (
    <main className="main">
      <div className="main__content">
        {images.map((image, index) => (
          <div className="main__content__img" style={{"--animation-order": index}}>
            <img key={image} src={`http://localhost:4000/${image}`} />
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
