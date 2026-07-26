# `nutri_consult_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| nutri_consult_detail_id | int(11) | NO | PRI | 0 |  |  |
| nutri_consult_detail_confirm | char(1) | YES |  | NULL |  |  |
| nutri_consult_id | int(11) | YES | MUL | NULL |  |  |
| nutri_consult_sub_type_id | int(11) | YES | MUL | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refnutri_consult20 | nutri_consult_id | no | 1 |
| ix_Refnutri_consult_sub_type21 | nutri_consult_sub_type_id | no | 1 |
| PRIMARY | nutri_consult_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
