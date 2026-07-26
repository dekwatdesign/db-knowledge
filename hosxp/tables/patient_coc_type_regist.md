# `patient_coc_type_regist`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_coc_type_regist_id | int(11) | NO | PRI | 0 |  |  |
| cid | char(13) | YES | MUL | NULL |  |  |
| patient_coc_type_id | int(11) | YES |  | NULL |  |  |
| is_register | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_cid | cid | no | 1 |
| PRIMARY | patient_coc_type_regist_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
