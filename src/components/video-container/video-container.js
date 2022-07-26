import { useState } from 'react';
import ReactPlayer from 'react-player';
import styles from './video-container.module.css';
import utilStyles from '../../styles/utils.module.css';
import useTheme from '../../hooks/useTheme';
import Img from 'react-cool-img';
import { digitourSrc } from '../../imageData';

const VideoContainer = ({ url = '' }) => {
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
            url={url}
            playing={false}
            controls
            volume={1}
            muted={true}
            // config={{
            //   file: {
            //     attributes: {
            //       controlsList: 'nodownload',
            //     },
            //   },
            // }}
          />
        ) : (
          <div className={styles.cover}>
            <Img
              style={{
                position: 'relative',
                width: '100%',
                height: '100%',
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
