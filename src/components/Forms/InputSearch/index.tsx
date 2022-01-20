import { InputHTMLAttributes, ComponentType, useState } from 'react';

import type { IconBaseProps } from 'react-icons/lib';

import styles from './styles.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  placeholder: string;
  onIconClick?: (e?) => void;
  icon?: ComponentType<IconBaseProps>;
}

export const InputSearch: React.FC<InputProps> = ({
  name,
  label,
  icon: Icon,
  onIconClick,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={styles['container']}>
      <label htmlFor={name}>
        <div
          className={[
            styles['input-field-container'],
            isFocused ? styles['is-focused'] : '',
          ].join(' ')}
        >
          <input
            type="text"
            name=""
            id=""
            className={styles['input-field']}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            {...rest}
          />

          {Icon && (
            <button type="submit">
              <Icon size={24} onClick={onIconClick} />
            </button>
          )}
        </div>
      </label>
    </div>
  );
};
