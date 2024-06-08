const BankOption = ({ bank, name, features, interestRate, buttonLabel }) => {
    return (
        <div className={`bank-option ${bank.toLowerCase()}`}>
            <div className="bank-header">
                <h3>{name}</h3>
            </div>
            <ul className="features">
                {features.map((feature, index) => (
                    <li key={index}>
                        <div className="checkbox-container">
                            <label htmlFor="checkbox" className={`checkbox-label ${bank.toLowerCase()}`}>
                                <span className="checkmark">&#10004;</span>

                            </label>
                        </div>
                        <span>{feature}</span>

                    </li>
                ))}
            </ul>
            <div className="interest-and-button">
        <div className="interest-rate">
          <p>Interest Up to</p>
          <strong>{interestRate}</strong>
        </div>
        <div className="booknow-button">
        <button className={`book-now ${bank.toLowerCase()}`}>{buttonLabel}</button>
        </div>
      </div>
        </div>
    );
};
export default BankOption;