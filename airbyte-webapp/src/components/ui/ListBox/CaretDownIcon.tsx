const CaretDownIcon = ({ color = "currentColor" }: { color?: string }): JSX.Element => (
  <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M1.42159 0.689453C0.929401 0.689453 0.683307 1.29102 1.03878 1.64648L4.53878 5.14648C4.75753 5.36523 5.11299 5.36523 5.33174 5.14648L8.83174 1.64648C9.18721 1.29102 8.94112 0.689453 8.44893 0.689453H1.42159Z"
      fill="#AFAFC1"
    />
    fill={color}
  </svg>
);

export default CaretDownIcon;
