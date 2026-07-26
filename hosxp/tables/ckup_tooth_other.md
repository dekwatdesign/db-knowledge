# `ckup_tooth_other`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ckup_tooth_other_id | int(11) | NO | PRI | 0 |  |  |
| ckup_tooth_id | int(11) | YES | MUL | NULL |  |  |
| ckup_tooth_other_type_id | int(11) | YES | MUL | NULL |  |  |
| ckup_tooth_other_check | char(1) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| staff | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ckup_tooth_id | ckup_tooth_id | no | 1 |
| ix_ckup_tooth_other_type_id | ckup_tooth_other_type_id | no | 1 |
| PRIMARY | ckup_tooth_other_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
