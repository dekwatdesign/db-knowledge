# `er_oper_code_area`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| er_oper_code_area_id | int(11) | NO | PRI | 0 |  |  |
| er_oper_code | int(11) | YES | MUL | NULL |  |  |
| area_name | varchar(250) | YES |  | NULL |  |  |
| icd10tm_operation_code | varchar(7) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_er_oper_code | er_oper_code | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | er_oper_code_area_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
