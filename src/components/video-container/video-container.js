import { useState } from 'react';
import ReactPlayer from 'react-player';
import styles from './video-container.module.css';
import utilStyles from '../../styles/utils.module.css';
import useTheme from '../../hooks/useTheme';
import Img from 'react-cool-img';
import { digitourSrc } from '../../imageData';
import { digitalTourVideo } from '../../data';

const VideoContainer = () => {
  const {
    dimensions: { width },
  } = useTheme();
  const [toggle, setToggle] = useState(false);

  return (
    <section className={styles.container}>
      <h2 className={utilStyles.headingLg} style={{ padding: '0.5rem' }}>
        take a tour
      </h2>
      <div className={styles.container}>
        {toggle ? (
          <ReactPlayer
            width={width < 640 ? width : 640}
            url={digitalTourVideo}
            playing={false}
            controls
            volume={1}
            muted={true}
          />
        ) : (
          <div className={styles.cover}>
            <Img
              style={{
                position: 'relative',
                width: '640px',
                height: '360px',
                backgroundSize: 'cover',
                backgroundColor: '#000',
                objectFit: 'cover',
              }}
              alt="spitzer school of architecture digital tour video cover"
              src={digitourSrc}
            />
            <button
              aria-label="play digital tour video"
              className={styles.playButton}
              onClick={() => setToggle(true)}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoContainer;
