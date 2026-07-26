# `officer_note_template`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| officer_note_template_id | int(11) | NO | PRI | 0 |  |  |
| officer_id | int(11) | YES | MUL | NULL |  |  |
| officer_note_code | varchar(25) | YES |  | NULL |  |  |
| officer_note | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_officer_id | officer_id | no | 1 |
| ix_officer_id_code | officer_id | no | 1 |
| ix_officer_id_code | officer_note_code | no | 2 |
| PRIMARY | officer_note_template_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
