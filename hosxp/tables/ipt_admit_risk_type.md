# `ipt_admit_risk_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipt_admit_risk_type_id | int(11) | NO | PRI | 0 |  |  |
| ipt_admit_risk_type_name | varchar(250) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ipt_admit_risk_type_name | ipt_admit_risk_type_name | yes | 1 |
| PRIMARY | ipt_admit_risk_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ipt_admit_risk_type_id": 1,
    "ipt_admit_risk_type_name": "ACS : Cardiogenic Shock, Cardiac Arrest"
  },
  {
    "ipt_admit_risk_type_id": 2,
    "ipt_admit_risk_type_name": "Stoke : Brain Edema"
  },
  {
    "ipt_admit_risk_type_id": 3,
    "ipt_admit_risk_type_name": "DM : Hypoglycemia, Hyperglycemia"
  },
  {
    "ipt_admit_risk_type_id": 4,
    "ipt_admit_risk_type_name": "HT : Acute Stroke"
  },
  {
    "ipt_admit_risk_type_id": 5,
    "ipt_admit_risk_type_name": "COPD : Respiratory Failure, Acute Exacerbation"
  },
  {
    "ipt_admit_risk_type_id": 6,
    "ipt_admit_risk_type_name": "Asthma : Respiratory Failure"
  },
  {
    "ipt_admit_risk_type_id": 7,
    "ipt_admit_risk_type_name": "Sepsis : Septic Shock"
  },
  {
    "ipt_admit_risk_type_id": 8,
    "ipt_admit_risk_type_name": "Head Injury : Increased Intracranial Pressure"
  }
]
```
