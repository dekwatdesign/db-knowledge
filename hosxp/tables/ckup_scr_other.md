# `ckup_scr_other`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ckup_scr_other_id | int(11) | NO | PRI | 0 |  |  |
| ckup_scr_id | int(11) | YES | MUL | NULL |  |  |
| ckup_scr_other_list_type_id | int(11) | NO | PRI | 0 |  |  |
| ckup_scr_other_result | varchar(255) | YES |  | NULL |  |  |
| staff | varchar(200) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ckup_scr_id | ckup_scr_id | no | 1 |
| ix_ckup_scr_other_list_type_id | ckup_scr_other_list_type_id | no | 1 |
| PRIMARY | ckup_scr_other_id | yes | 1 |
| PRIMARY | ckup_scr_other_list_type_id | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
