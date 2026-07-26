# `odontogram_ai`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| odontogram_ai_id | int(11) | NO | PRI | 0 |  |  |
| odontogram_ai_res | text | YES |  | NULL |  |  |
| dental_care_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdental_care31 | dental_care_id | no | 1 |
| PRIMARY | odontogram_ai_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
