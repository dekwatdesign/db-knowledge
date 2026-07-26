# `clinic_ckd_fund_claim_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ckd_fund_claim_type_id | int(11) | NO | PRI | 0 |  |  |
| ckd_fund_claim_type_name | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | ckd_fund_claim_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "ckd_fund_claim_type_id": 1,
    "ckd_fund_claim_type_name": "DMIS"
  },
  {
    "ckd_fund_claim_type_id": 2,
    "ckd_fund_claim_type_name": "HD"
  },
  {
    "ckd_fund_claim_type_id": 3,
    "ckd_fund_claim_type_name": "ไม่เบิก"
  }
]
```
