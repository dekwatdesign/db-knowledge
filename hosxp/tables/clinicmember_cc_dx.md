# `clinicmember_cc_dx`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| clinicmember_cc_dx_id | int(11) | NO | PRI | 0 |  |  |
| clinicmember_cc_list_id | int(11) | YES | MUL | NULL |  |  |
| cm_cancer_diag_type_id | int(11) | YES |  | NULL |  |  |
| doctor_code | varchar(15) | YES |  | NULL |  |  |
| dx_date | date | YES |  | NULL |  |  |
| dx_text | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_clinicmember_cc_list_id | clinicmember_cc_list_id | no | 1 |
| PRIMARY | clinicmember_cc_dx_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
