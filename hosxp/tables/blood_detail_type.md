# `blood_detail_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| blood_detail_type_id | int(11) | NO | PRI | 0 |  |  |
| blood_detail_type_name | varchar(150) | YES | UNI | NULL |  |  |
| icode | char(7) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_blood_detail_type_name | blood_detail_type_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | blood_detail_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
