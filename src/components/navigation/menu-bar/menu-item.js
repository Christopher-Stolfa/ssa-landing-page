import styles from './menu-item.module.css';
import { useRef, useState, useEffect, useCallback } from 'react';
import SubMenu from './sub-menu';
/**
 * Menu item that contains the menu title, it's submenu, and submenu links
 * @param {*} props
 * @param {Object} props.menuOption - Menu item data that includes a title and a subMenu array of subMenu groups of href links.
 */
const MenuItem = ({ index, menuOption: { title = '', subMenu = [] } }) => {
  const [open, setOpen] = useState(false);
  const [currentFocus, setCurrentFocus] = useState(0);
  const btnRef = useRef(null);
  const menuItemRef = useRef(null);

  // Aria expanded dynamically set based on the boolean value of the variable 'open'.
  useEffect(() => {
    btnRef.current.ariaExpanded = `${open}`;
  }, [open]);

  // If menu is open, add an event listener for mousedown acitivity, otherwise remove the event listener.
  useEffect(() => {
    if (open) {
      document.addEventListener('mousedown', handleClick);
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  useEffect(() => {
    open && menuItemRef.current.querySelectorAll('a')[currentFocus].focus();
  }, [open, currentFocus]);

  const nextFocus = useCallback(() => {
    const size = menuItemRef.current.querySelectorAll('a').length;
    setCurrentFocus((prevState) => (prevState === size - 1 ? 0 : prevState + 1));
  }, [setCurrentFocus]);

  const prevFocus = useCallback(() => {
    const size = menuItemRef.current.querySelectorAll('a').length;
    setCurrentFocus((prevState) => (prevState === 0 ? size - 1 : prevState - 1));
  }, [setCurrentFocus]);

  // If the user clicks outside the parent element, set open to false.
  const handleClick = useCallback(
    (e) => {
      if (!menuItemRef.current.contains(e.target)) {
        setOpen(false);
      }
    },
    [setOpen],
  );

  /**
   * Handles keydown events that occur within the scope of the Menu Item.
   */
  const handleKeyDown = useCallback(
    (e) => {
      const size = menuItemRef.current.querySelectorAll('a').length;
      switch (e.key) {
        case 'Enter': {
          if (!open) {
            setOpen(true);
            setCurrentFocus(0);
          }
          break;
        }
        case 'Space': {
          if (!open) {
            e.preventDefault();
            setOpen(true);
            setCurrentFocus(0);
          }
          break;
        }
        case 'Escape': {
          e.preventDefault();
          setOpen(false);
          btnRef.current.focus();
          break;
        }
        case 'Tab': {
          if (open) {
            if (e.shiftKey) {
              e.preventDefault();
              prevFocus();
            } else {
              e.preventDefault();
              nextFocus();
            }
          }
          break;
        }
        case 'ArrowUp': {
          if (open) {
            e.preventDefault();
            prevFocus();
          }
          break;
        }
        case 'ArrowDown': {
          if (open) {
            e.preventDefault();
            nextFocus();
          }
          break;
        }
      }
    },
    [open, prevFocus, nextFocus],
  );

  return (
    <>
      <li ref={menuItemRef} id={'menuItem' + index} role="none" className={styles.menuItem}>
        <button
          onClick={() => setOpen(true)}
          role="menuitem"
          id={'menuItemBtn' + index}
          aria-haspopup="true"
          aria-expanded="false"
          aria-controls={'subMenu' + index}
          tabIndex="0"
          ref={btnRef}
          className={styles.menuButton}
        >
          {title}
        </button>
        <ul id={'subMenu' + index} role="none" className={open ? styles.menuVisible : styles.menuHidden}>
          {subMenu.map(({ subTitle = '', items = [] }, i) => (
            <SubMenu key={subTitle + i} subTitle={subTitle} items={items} />
          ))}
        </ul>
      </li>
    </>
  );
};

export default MenuItem;
