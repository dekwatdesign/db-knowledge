# `vtdc_risk_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vtdc_risk_type_id | int(11) | NO | PRI | 0 |  |  |
| vtdc_risk_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_vtdc_risk_type_name | vtdc_risk_type_name | yes | 1 |
| PRIMARY | vtdc_risk_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "vtdc_risk_type_id": 3,
    "vtdc_risk_type_name": "Cheif Complaint"
  },
  {
    "vtdc_risk_type_id": 1,
    "vtdc_risk_type_name": "Diagnosis Code (ICD10)"
  },
  {
    "vtdc_risk_type_id": 4,
    "vtdc_risk_type_name": "Lab Code"
  },
  {
    "vtdc_risk_type_id": 2,
    "vtdc_risk_type_name": "Medication Code (ICODE)"
  }
]
```
