import React, { forwardRef } from "react";

const ResultModalComponent = (
    { result, targetTime, remainingTime, onResetTimer },
    ref
) => {
    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

    return (
        <dialog ref={ref} className="result-modal">
            <h2>You {result ? score : "lost"}!</h2>
            <p>
                The target time was <strong>{targetTime} seconds.</strong>
            </p>
            {result && (
                <p>
                    You stopped the timer with{" "}
                    <strong>{remainingTime / 1000} seconds left.</strong>
                </p>
            )}
            <form method="dialog">
                <button onClick={onResetTimer}>Close</button>
            </form>
        </dialog>
    );
};
const ResultModal = forwardRef(ResultModalComponent);

export default ResultModal;
