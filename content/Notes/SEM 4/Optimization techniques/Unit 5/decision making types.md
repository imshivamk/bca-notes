Here's a detailed set of notes on **Decision Making Under Risk and Uncertainty**, including:

- **Elements of a Decision-Making Problem**
    
- **Decision Making Under Risk** with:
    
    - Expected Monetary Value (EMV)
        
    - Expected Value with Perfect Information (EVwPI)
        
    - Expected Value of Perfect Information (EVPI)
        
    - Expected Opportunity Loss (EOL)
        
- **Decision Making Under Uncertainty** with:
    
    - Maximax / Minimin
        
    - Maximin
        
    - Hurwicz (Alpha)
        
    - Laplace
        
    - Minimax Regret
        
- **Decision Tree** with a simple example
    

All examples use **unique tables**, formulas are enclosed in `$$ $$`, and markdown tables are formatted for **Obsidian**.

---

## **1. Elements of Decision-Making Problem**

1. **Decision Alternatives**: Courses of action available to the decision-maker.
    
2. **States of Nature**: Possible future events not under the control of the decision-maker.
    
3. **Payoffs**: Outcomes (gains/losses) from choosing a particular action under a specific state of nature.
    
4. **Probabilities**: Likelihood of each state of nature (used in decision under risk).
    
5. **Decision Criteria**: Rules for selecting the best alternative.
    

---

## **2. Decision Making Under Risk**

States of nature have known probabilities.

### **i) Expected Monetary Value (EMV)**

**Formula:**
$$
EMV(Ai)=∑j=1nP(Sj)×Payoff(Ai,Sj)EMV(A_i) = \sum_{j=1}^{n} P(S_j) \times Payoff(A_i, S_j)
$$
Where:

- AiA_i: Alternative
    
- SjS_j: State of Nature
    
- P(Sj)P(S_j): Probability of state SjS_j
    

**Example:**

|Alternative|Profit if Demand is High (P=0.6)|Profit if Low (P=0.4)|
|---|---|---|
|A1 (Invest)|100|20|
|A2 (Do Nothing)|50|40|

**EMV Calculations:**

- EMV(A1)=0.6×100+0.4×20=60+8=68EMV(A1) = 0.6 \times 100 + 0.4 \times 20 = 60 + 8 = 68
    
- EMV(A2)=0.6×50+0.4×40=30+16=46EMV(A2) = 0.6 \times 50 + 0.4 \times 40 = 30 + 16 = 46
    

**Best Decision**: Choose A1 (EMV = 68)

---

### **ii) Expected Value with Perfect Information (EVwPI)**

**Formula:**

EVwPI=∑j=1nP(Sj)×max⁡i{Payoff(Ai,Sj)}EVwPI = \sum_{j=1}^{n} P(S_j) \times \max_i \{ Payoff(A_i, S_j) \}

**Using the above table:**

- For High demand: Max = 100 (A1)
    
- For Low demand: Max = 40 (A2)
    

EVwPI=0.6×100+0.4×40=60+16=76EVwPI = 0.6 \times 100 + 0.4 \times 40 = 60 + 16 = 76

---

### **iii) Expected Value of Perfect Information (EVPI)**

**Formula:**

EVPI=EVwPI−max⁡i{EMV(Ai)}EVPI = EVwPI - \max_i \{ EMV(A_i) \} EVPI=76−68=8EVPI = 76 - 68 = 8

**Interpretation**: Max value worth paying for perfect information is 8 units.

---

### **iv) Expected Opportunity Loss (EOL)**

**Steps:**

1. Create an **Opportunity Loss Table**.
    
2. Multiply each loss with its probability.
    
3. Choose the alternative with the **lowest EOL**.
    

**Payoff Table:**

|Alternative|High (0.5)|Medium (0.3)|Low (0.2)|
|---|---|---|---|
|A1|200|100|50|
|A2|150|120|100|
|A3|300|80|40|

**Opportunity Loss Table (Subtract from column max):**

|Alternative|High|Medium|Low|
|---|---|---|---|
|A1|100|20|10|
|A2|150|0|0|
|A3|0|40|60|

**EOL Calculations:**

- A1: 0.5×100+0.3×20+0.2×10=50+6+2=580.5 \times 100 + 0.3 \times 20 + 0.2 \times 10 = 50 + 6 + 2 = 58
    
- A2: 0.5×150+0.3×0+0.2×0=750.5 \times 150 + 0.3 \times 0 + 0.2 \times 0 = 75
    
- A3: 0.5×0+0.3×40+0.2×60=0+12+12=240.5 \times 0 + 0.3 \times 40 + 0.2 \times 60 = 0 + 12 + 12 = 24
    

**Best Decision**: A3 (lowest EOL = 24)

---

## **3. Decision Making Under Uncertainty**

Probabilities are **unknown**.

### **i) Maximax (Optimistic)**

Choose the alternative with the **maximum of maximum payoffs**.

|Alternative|S1|S2|S3|
|---|---|---|---|
|A1|10|15|30|
|A2|20|25|10|
|A3|5|10|20|

- Max of A1: 30
    
- Max of A2: 25
    
- Max of A3: 20
    

**Best Decision**: A1 (Maximax = 30)

---

### **ii) Maximin (Pessimistic)**

Choose the alternative with the **maximum of minimum payoffs**.

|Alternative|S1|S2|S3|
|---|---|---|---|
|A1|10|15|30|
|A2|20|25|10|
|A3|5|10|20|

- Min of A1: 10
    
- Min of A2: 10
    
- Min of A3: 5
    

**Best Decision**: A1 or A2 (Maximin = 10)

---

### **iii) Hurwicz Criterion**

**Formula:**

Hurwicz Value=α×Max+(1−α)×MinHurwicz\ Value = \alpha \times Max + (1 - \alpha) \times Min

Let α=0.7\alpha = 0.7

|Alternative|Max|Min|
|---|---|---|
|A1|30|10|
|A2|25|10|
|A3|20|5|

- A1: 0.7×30+0.3×10=21+3=240.7 \times 30 + 0.3 \times 10 = 21 + 3 = 24
    
- A2: 0.7×25+0.3×10=17.5+3=20.50.7 \times 25 + 0.3 \times 10 = 17.5 + 3 = 20.5
    
- A3: 0.7×20+0.3×5=14+1.5=15.50.7 \times 20 + 0.3 \times 5 = 14 + 1.5 = 15.5
    

**Best Decision**: A1

---

### **iv) Laplace Criterion (Equal Probability)**

Average all outcomes and choose the highest.

|Alternative|S1|S2|S3|Average|
|---|---|---|---|---|
|A1|10|15|30|553=18.33\frac{55}{3} = 18.33|
|A2|20|25|10|553=18.33\frac{55}{3} = 18.33|
|A3|5|10|20|353=11.67\frac{35}{3} = 11.67|

**Best Decision**: A1 or A2

---

### **v) Minimax Regret Criterion**

1. Create a regret table by subtracting each value from the column max.
    
2. Choose the alternative with **minimum of maximum regrets**.
    

|Alternative|S1|S2|S3|
|---|---|---|---|
|A1|10|15|30|
|A2|20|25|10|
|A3|5|10|20|

**Column Maxima**: S1 = 20, S2 = 25, S3 = 30

**Regret Table:**

|Alternative|S1|S2|S3|Max Regret|
|---|---|---|---|---|
|A1|10|10|0|10|
|A2|0|0|20|20|
|A3|15|15|10|15|

**Best Decision**: A1 (Minimax Regret = 10)

---

## **4. Decision Tree (Simple Example)**

A company can **launch a new product** (Cost = 20), with two outcomes:

- Success (Profit = 80) with P=0.6P = 0.6
    
- Failure (Loss = -20) with P=0.4P = 0.4
    

**Expected Value:**

EV=0.6×80+0.4×(−20)=48−8=40EV = 0.6 \times 80 + 0.4 \times (-20) = 48 - 8 = 40

**Net Gain** (after subtracting cost):

Net=40−20=20Net = 40 - 20 = 20

**Decision Tree Structure:**

```
[Decision: Launch or Not]
    ├── Launch
    │   ├── Success (0.6): +80
    │   └── Failure (0.4): -20
    └── Do Nothing: 0
```

**Best Decision**: Launch (Net EV = 20)

---

Let me know if you'd like these notes exported as a `.md` file or need more examples.