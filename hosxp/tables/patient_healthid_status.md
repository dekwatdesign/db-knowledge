# `patient_healthid_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cid | varchar(13) | NO | PRI |  |  |  |
| ial_level | double(2,1) | YES |  | NULL |  |  |
| auth_method_name | varchar(50) | YES |  | NULL |  |  |
| token_verify_method_name | varchar(50) | YES |  | NULL |  |  |
| portal_last_login | datetime | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | cid | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
