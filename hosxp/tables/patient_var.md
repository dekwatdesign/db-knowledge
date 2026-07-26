# `patient_var`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_var_id | int(11) | NO | PRI | 0 |  |  |
| cid | varchar(13) | YES | MUL | NULL |  |  |
| patient_var_name | varchar(200) | YES |  | NULL |  |  |
| patient_var_value | varchar(2000) | YES |  | NULL |  |  |
| create_datetime | datetime | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| expire_datetime | datetime | YES |  | NULL |  |  |
| staff | varchar(30) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_cid | cid | no | 1 |
| ix_cid_name | cid | yes | 1 |
| ix_cid_name | patient_var_name | yes | 2 |
| PRIMARY | patient_var_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
