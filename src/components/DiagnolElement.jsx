export default function AtmcDivider(props) {
    const { topColor , otherColor } = props;
    return (
        <div className="relative w-full h-[150px]" style={{ backgroundColor: otherColor }}>
            <svg
                className="absolute top-0 left-0 w-full h-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
            >
                <polygon points="0,0 100,0 100,100" fill={topColor} />
            </svg>
        </div>
    );
}
