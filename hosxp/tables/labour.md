# `labour`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| refer_no | varchar(20) | NO | PRI |  |  |  |
| symptoms | varchar(250) | YES |  | NULL |  |  |
| labour_date | datetime | YES |  | NULL |  |  |
| labour_time | varchar(5) | YES |  | NULL |  |  |
| deliver | int(11) | YES |  | NULL |  |  |
| sex | int(11) | YES |  | NULL |  |  |
| wight | varchar(10) | YES |  | NULL |  |  |
| apgarscore | varchar(3) | YES |  | NULL |  |  |
| npo_date | datetime | YES |  | NULL |  |  |
| npo_time | varchar(5) | YES |  | NULL |  |  |
| risk_core | varchar(1) | YES |  | NULL |  |  |
| risk_pph | varchar(1) | YES |  | NULL |  |  |
| risk_severe | varchar(1) | YES |  | NULL |  |  |
| risk_preterm | varchar(1) | YES |  | NULL |  |  |
| risk_fetal | varchar(1) | YES |  | NULL |  |  |
| risk_cpd | varchar(1) | YES |  | NULL |  |  |
| drug_oxytocin | varchar(1) | YES |  | NULL |  |  |
| drug_mgso4 | varchar(1) | YES |  | NULL |  |  |
| drug_dexamethasone | varchar(1) | YES |  | NULL |  |  |
| drug_ampicillin | varchar(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | refer_no | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
