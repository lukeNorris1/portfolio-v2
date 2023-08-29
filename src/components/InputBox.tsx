import { useEffect, useRef, useState } from "react";
import styles from "./InputBox.module.css";
import { sections } from "../consts/Sections";

export default function InputBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSectionSelect = () => {
    setIsOpen(false);
    setSearchQuery("");
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
      setSearchQuery("");
    }
  };

  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const filteredSections: string[] = sections?.filter((section: any) =>
    section.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className={styles.searchContainer} ref={dropdownRef}>
        <button
          className={styles.inputButton}
          type="button"
          onClick={toggleDropdown}
        >
          <div className={styles.searchBar}>
            <div className={styles.searchInput}>
              {isOpen ? (
                <input
                  type="text"
                  autoFocus
                  className={styles.inputField}
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onClick={(e) => e.stopPropagation()}
                  ref={searchInputRef}
                />
              ) : (
                <span className={styles.flashingCursor}></span>
              )}
            </div>
          </div>
        </button>
        {isOpen && filteredSections && filteredSections.length > 0 && (
          <div className={styles.contextBox}>
            <ul className={styles.dropdown}>
              {filteredSections.map((section, index) => (
                <li
                  key={index}
                  className="px-4 py-2 cursor-pointer text-black text-sm text-start hover:bg-blue-500 hover:text-black truncate"
                  onClick={() => {
                    handleSectionSelect();
                  }}
                >
                  <a href={`/#${section.toLowerCase()}`}>{section}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
