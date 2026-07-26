# `opitemrece_delete_reason`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opi_delete_reason_id | int(11) | NO | PRI | 0 |  |  |
| opi_guid | varchar(38) | YES | UNI | NULL |  |  |
| reason_text | text | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| computer_name | varchar(150) | YES |  | NULL |  |  |
| vn | varchar(12) | YES |  | NULL |  |  |
| an | varchar(9) | YES |  | NULL |  |  |
| delete_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_opi_guid | opi_guid | yes | 1 |
| PRIMARY | opi_delete_reason_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
