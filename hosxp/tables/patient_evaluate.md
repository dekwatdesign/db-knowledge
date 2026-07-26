# `patient_evaluate`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_evaluate_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| patient_evaluate_date | date | YES |  | NULL |  |  |
| patient_evaluate_time | time | YES |  | NULL |  |  |
| evaluate_form_id | int(11) | YES |  | NULL |  |  |
| evaluate_staff | varchar(50) | YES |  | NULL |  |  |
| vn_an | varchar(12) | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hn | hn | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_vnan | vn_an | no | 1 |
| PRIMARY | patient_evaluate_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
