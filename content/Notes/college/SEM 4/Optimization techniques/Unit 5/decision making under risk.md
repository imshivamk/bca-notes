---
dg-publish: true
---
## **Decision Making Under Risk**

In decision-making under risk, the decision maker knows the possible outcomes and the probability of occurrence of each state of nature. This allows for quantitative evaluation of each alternative.

---

### **i) Expected Monetary Value (EMV) Criterion**

- **Definition**: The EMV of an alternative is the sum of possible payoffs for each state of nature, each weighted by its probability.
    
- **Formula**:
$$
EMV=∑(Payoff×Probability)
$$
- **Decision Rule**: Choose the alternative with the **highest EMV**.
    
| Alternative | State A (p = 0.6) | State B (p = 0.4) | EMV                     |
| ----------- | ----------------- | ----------------- | ----------------------- |
| Option X    | ₹5000             | ₹2000             | 5000×0.6+2000×0.4=₹3800 |
| Option Y    | ₹4000             | ₹3000             | 4000×0.6+3000×0.4=₹3600 |
 ans. option X

---

### **ii) Expected Value with Perfect Information (EVwPI)**

- **Definition**: EVwPI is the expected payoff when a decision maker has **perfect knowledge** of which state of nature will occur.
    
- **Calculation**:
    
    1. For each state of nature, choose the **best payoff** across all alternatives.
        
    2. Multiply each best payoff by the **probability** of its state.
        
    3. Sum the results.
        

**Formula**:
$$
EVwPI=∑(BestPayoff×Probability)
$$

**Example**:  
If:

- State A (0.6): Max payoff = ₹5000
    
- State B (0.4): Max payoff = ₹3000
    

EVwPI=5000×0.6+3000×0.4=₹4200EVwPI = 5000×0.6 + 3000×0.4 = ₹4200EVwPI=5000×0.6+3000×0.4=₹4200

---

### **iii) Expected Value of Perfect Information (EVPI)**

- **Definition**: EVPI measures the **maximum amount** a decision maker would be willing to pay for perfect information.
    
- **Formula**:
$$
EVPI=EVwPI−EMVbest​
$$

**Example**:

- EVwPI = ₹4200
    
- Best EMV = ₹3800
    

$$
EVPI=4200−3800=₹400
$$

→ You would not pay more than ₹400 for perfect information.

---

### **iv) Expected Opportunity Loss (EOL)**

- **Definition**: Also called **Expected Regret**. It is the expected amount of loss due to not choosing the best action for each state.
    
- **Steps to Calculate**:
    
    1. Construct an **Opportunity Loss Table**:  
        For each state, subtract each alternative's payoff from the best payoff in that state.
        
    2. Multiply each opportunity loss by the probability of the corresponding state.
        
    3. Sum for each alternative.
        
- **Decision Rule**: Choose the alternative with the **minimum EOL**.
    

**Example**:

|State|Best Payoff|Option X|Option Y|Regret X|Regret Y|
|---|---|---|---|---|---|
|A (0.6)|5000|5000|4000|0|1000|
|B (0.4)|3000|2000|3000|1000|0|

$$
EOLX​=(0×0.6+1000×0.4)=₹400
$$


$$
EOLY​=(1000×0.6+0×0.4)=₹600
$$

→ Choose **Option X** (lower EOL).