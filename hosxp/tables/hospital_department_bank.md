# `hospital_department_bank`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hospital_department_bank_id | int(11) | NO | PRI | 0 |  |  |
| hospital_department_bank_name | varchar(200) | YES |  | NULL |  |  |
| hospital_department_id | int(11) | YES | MUL | NULL |  |  |
| acc_bank_type_id | int(11) | YES |  | NULL |  |  |
| bank_branch | varchar(150) | YES |  | NULL |  |  |
| bank_account_number | varchar(50) | YES |  | NULL |  |  |
| remark | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_hospital_department_id | hospital_department_id | no | 1 |
| PRIMARY | hospital_department_bank_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
