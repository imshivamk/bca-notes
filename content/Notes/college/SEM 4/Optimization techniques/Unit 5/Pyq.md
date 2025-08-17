---
dg-publish: true
---

### **Given Data Summary**

| Action | S1   | S2   | S3   | S4   |
| ------ | ---- | ---- | ---- | ---- |
| A1     | 20   | 28   | *45* | 39   |
| A2     | 29   | 25   | 28   | *36* |
| A3     | *62* | 58   | 48   | 59   |
| A4     | 52   | *56* | 48   | 51   |

**Probabilities**:
	
- S1: 0.30
    
- S2: 0.22
    
- S3: 0.18
    
- S4: 0.30
    

---

### **a) Maximax Criterion**

- Choose the action with the maximum of the maximum payoffs.
    
- **Max Payoffs**:
    
    - A1: 45
        
    - A2: 36
        
    - A3: **62**
        
    - A4: 56
        
- ✅ **Optimum Action (Maximax)**: **A3**
    

---

### **b) Laplace Criterion** - average

- Assumes all states are equally likely.
- Choose action with the highest average payoff.

| Action | Average Payoff |
| ------ | -------------- |
| A1     | 33.00          |
| A2     | 29.50          |
| A3     | **56.75**      |
| A4     | 51.75          |

- ✅ **Optimum Action (Laplace)**: **A3**
    

---

### **c) EOL Criterion (Expected Opportunity Loss)**

**EOL Values**:

|Action|EOL|
|---|---|
|A1|25.74|
|A2|27.66|
|A3|**0.00**|
|A4|5.84|

- ✅ **Optimum Action (EOL)**: **A3**
    

---

### **EVPI (Expected Value of Perfect Information)**

1. **Best Payoff per State**:
    
    - S1: 62 (A3)
        
    - S2: 58 (A3)
        
    - S3: 48 (A3, A4)
        
    - S4: 59 (A3)
        
2. **EVwPI**:
    
    (62×0.30)+(58×0.22)+(48×0.18)+(59×0.30)=57.7(62×0.30) + (58×0.22) + (48×0.18) + (59×0.30) = 57.7
3. **Best EMV among all actions**:
    
    - A3 has the highest EMV = **57.7**
        
4. **EVPI = EVwPI - Best EMV**
    
    EVPI=57.7−57.7=0EVPI = 57.7 - 57.7 = 0

- ✅ **EVPI = 0**, which means perfect information offers no additional value (because one action — A3 — dominates all states).
    

---

### ✅ **Final Recommendations**

- **Best Action** under all criteria: **A3**
    
- **EVPI = 0** → No benefit from perfect information
    

Let me know if you'd like this formatted for handwritten notes or with step-by-step calculations.