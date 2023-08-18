export const Recovery = (props) => {
    const handleRecoveryRequest = () => {
        window.location.href =
            "mailto:vixovi3353@v1zw.com?subject=Password Recovery Request";
        console.log("Recovery request initiated");
    };

    return (
        <div className="recovery-container">
        <h2>Account Recovery</h2>
        <p>Forgot your password? No worries!</p>
        <button onClick={() => props.onFormSwitch("login")}>Back to Login</button>
        <button onClick={handleRecoveryRequest}>Forgot email? Ask for recovery</button>
        </div>
    );
};
