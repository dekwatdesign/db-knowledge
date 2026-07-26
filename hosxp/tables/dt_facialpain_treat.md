# `dt_facialpain_treat`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_facialpain_treat_id | int(11) | NO | PRI | 0 |  |  |
| dt_facialpain_treat_note | longtext | YES |  | NULL |  |  |
| dt_facialpain_main_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdt_facialpain_main15 | dt_facialpain_main_id | no | 1 |
| PRIMARY | dt_facialpain_treat_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
