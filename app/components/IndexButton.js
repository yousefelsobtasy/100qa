
const IndexButton = ({ input, setInput, setCurrentQuestionIndex, setErrorMessage, qaLength }) => {
    return (
        <>
            <input
                dir="ltr"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)} // Ensure input is converted to a number
                onKeyDown={(e) => {
                    if (e.key === 'Enter' && input > 0 && input <= qaLength - 1) {
                        setCurrentQuestionIndex(input - 1)
                        setErrorMessage(null); // Clear error message if valid
                    } else if (e.key === 'Enter') {
                        setErrorMessage(`Please enter a number between 1 and ${qaLength}`);
                    }
                }}
                min="1"
                max={qaLength}
            />
        </>
    )
}

export default IndexButton
