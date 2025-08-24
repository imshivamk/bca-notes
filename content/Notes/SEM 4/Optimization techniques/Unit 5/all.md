---
dg-publish: true
---
Here is a detailed guide on **Decision Making under 
## ✅ I. DECISION MAKING UNDER CERTAINTY

### 🔹 Definition:

When the outcome of each alternative is known with certainty.

### 🔹 Method:

Choose the alternative with the highest payoff (or lowest cost).

### 🔹 Example:

|Option|Profit (₹)|
|---|---|
|A|5000|
|B|8000|
|C|7000|

**Best Choice**: Option B (₹8000)

---

## ✅ II. DECISION MAKING UNDER RISK

### 🔹 Definition:

Outcomes are not certain, but probabilities are known.

---

### 1. **Expected Monetary Value (EMV)**

#### 📘 Formula:

EMV=∑(Payoff×Probability)EMV = \sum (Payoff \times Probability)

#### 🧮 Example:

|Option|Outcome 1 (p=0.6)|Outcome 2 (p=0.4)|
|---|---|---|
|A|₹10000|₹4000|
|B|₹7000|₹5000|

- EMV(A) = 10000×0.6 + 4000×0.4 = 6000 + 1600 = ₹7600
    
- EMV(B) = 7000×0.6 + 5000×0.4 = 4200 + 2000 = ₹6200
    

✅ **Choose A** (Higher EMV)

---

### 2. **Expected Opportunity Loss (EOL)**

#### 📘 Formula:

EOL=∑(Opportunity Loss×Probability)EOL = \sum (Opportunity\ Loss \times Probability) Opportunity Loss=Max Payoff in state−Payoff of alternative\text{Opportunity Loss} = \text{Max Payoff in state} - \text{Payoff of alternative}

#### 🧮 Example (Same as above):

|Outcome|Best Payoff|A's Loss|B's Loss|
|---|---|---|---|
|1|10000|0|3000|
|2|5000|1000|0|

EOL(A) = 0×0.6 + 1000×0.4 = ₹400  
EOL(B) = 3000×0.6 + 0×0.4 = ₹1800

✅ **Choose A** (Lower EOL)

---

### 3. **Expected Value with Perfect Information (EVwPI)**

#### 📘 Formula:

EVwPI=∑(Max payoff per state×Probability)EVwPI = \sum (Max\ payoff\ per\ state \times Probability)

#### 🧮 Example:

From earlier table:

- Max Outcome 1 = ₹10000 (A)
    
- Max Outcome 2 = ₹5000 (B)
    

EVwPI=10000×0.6+5000×0.4=6000+2000=₹8000EVwPI = 10000×0.6 + 5000×0.4 = 6000 + 2000 = ₹8000

---

### 4. **Expected Value of Perfect Information (EVPI)**

#### 📘 Formula:

EVPI=EVwPI−Best EMVEVPI = EVwPI - Best\ EMV

#### 🧮 Example:

EVPI=8000−7600=₹400EVPI = 8000 - 7600 = ₹400

✅ Value of having perfect information = ₹400

---

## ✅ III. DECISION MAKING UNDER UNCERTAINTY

### 🔹 Definition:

Outcomes are unknown, and probabilities are not available.

---

### 1. **Maximax Criterion (Optimistic)**

#### 📘 Formula:

Choose action with max⁡(Maximum payoff)Choose\ action\ with\ \max(\text{Maximum payoff})

#### 🧮 Example:

|Option|Worst|Best|
|---|---|---|
|A|2000|9000|
|B|3000|7000|
|C|1000|8000|

✅ Choose A (best max = ₹9000)

---

### 2. **Maximin Criterion (Pessimistic)**

#### 📘 Formula:

Choose action with max⁡(Minimum payoff)Choose\ action\ with\ \max(\text{Minimum payoff})

|Option|Min Payoff|
|---|---|
|A|₹2000|
|B|₹3000|
|C|₹1000|

✅ Choose B (max of mins = ₹3000)

---

### 3. **Minimax Regret Criterion**

#### 📘 Steps:

- Create **regret table** by subtracting each value from column maximum.
    
- Choose option with **minimum of maximum regrets**.
    

|Outcome|A|B|C|
|---|---|---|---|
|1|2000|3000|1000|
|2|9000|7000|8000|

**Max in O1 = 3000, Max in O2 = 9000**  
→ Regret Table:

|Option|R1|R2|Max|
|---|---|---|---|
|A|1000|0|1000|
|B|0|2000|2000|
|C|2000|1000|2000|

✅ Choose A (min of max regrets)

---

### 4. **Laplace Criterion (Equal Probabilities)**

#### 📘 Formula:

Average Payoff=Sum of PayoffsNumber of StatesAverage\ Payoff = \frac{Sum\ of\ Payoffs}{Number\ of\ States}

| A = (2000 + 9000)/2 = 5500  
| B = (3000 + 7000)/2 = 5000  
| C = (1000 + 8000)/2 = 4500

✅ Choose A

---

### 5. **Hurwicz Criterion**

#### 📘 Formula:

H=α×(Best)+(1−α)×(Worst)H = \alpha × (\text{Best}) + (1-\alpha) × (\text{Worst})

Let α = 0.6

|Option|H-Score|
|---|---|
|A|0.6×9000 + 0.4×2000 = 5400 + 800 = 6200|
|B|0.6×7000 + 0.4×3000 = 4200 + 1200 = 5400|
|C|0.6×8000 + 0.4×1000 = 4800 + 400 = 5200|

✅ Choose A

---

## 📝 Sample Exam Question:

> A manager must choose between three investment options A, B, and C. The payoffs (in ₹) for three different market conditions are given:
> 
> |Option|Strong (S1)|Medium (S2)|Weak (S3)|
> |---|---|---|---|
> |A|12000|8000|4000|
> |B|10000|9000|6000|
> |C|15000|7000|3000|
> 
> **Probabilities**: S1 = 0.3, S2 = 0.4, S3 = 0.3
> 
> a) Calculate EMV for each option  
> b) Calculate EOL and choose best option  
> c) Compute EVPI

Would you like this sample solved as well?