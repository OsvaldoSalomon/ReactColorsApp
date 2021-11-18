const styles = {
    root: {
        width: "20%",
        height: "25%",
        margin: "0 auto -3.5px",
        display: "inline-block",
        position: "relative",
        verticalAlign: "top",
        cursor: "pointer",
        "&:hover svg": {
            color: "white",
            transform: "scale(1.5)"
        }
    },
    boxContent: {
        position: "absolute",
        width: "100%",
        left: "0",
        bottom: "0",
        padding: "10px",
        color: "rgba(0,0,0,0.5)",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontSize: "13px",
        display: "flex",
        justifyContent: "space-between"
    },
    deleteIcon: {
        transition: "all 0.3s ease-in-out"
    }
}

export default styles;
