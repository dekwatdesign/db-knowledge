# `pttype_note_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pttype_note_list_id | int(11) | NO | PRI | 0 |  |  |
| staff | varchar(50) | YES | MUL | NULL |  |  |
| note_text | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_staff | staff | no | 1 |
| PRIMARY | pttype_note_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
