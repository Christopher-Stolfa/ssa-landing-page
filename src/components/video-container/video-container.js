import { useState } from 'react';
import ReactPlayer from 'react-player';
import styles from './video-container.module.css';
import utilStyles from '../../styles/utils.module.css';
import useTheme from '../../hooks/useTheme';
import Image from 'next/image';

const VideoContainer = ({ url = '' }) => {
  const {
    dimensions: { width },
  } = useTheme();
  const [toggle, setToggle] = useState(false);

  return (
    <section className={styles.container}>
      <h2 className={utilStyles.heading2Xl} style={{ padding: '1rem' }}>
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
            config={{
              file: {
                attributes: {
                  controlsList: 'nodownload',
                },
              },
            }}
          />
        ) : (
          <div className={styles.cover}>
            <Image
              alt="spitzer school of architecture digital tour video cover"
              src={'/images/digitour-thumbnail.jpg'}
              priority="true"
              layout="fill"
              objectFit="cover"
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
