interface ErrorMessageProps {
    message: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
    return <p style={{ color: "red", marginTop: "10px" }}>{message}</p>;
};
