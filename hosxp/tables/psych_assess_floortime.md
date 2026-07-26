# `psych_assess_floortime`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_assess_floortime_id | int(11) | NO | PRI | 0 |  |  |
| psych_assess_head_id | int(11) | YES | MUL | NULL |  |  |
| psych_assess_floortime_note1 | text | YES |  | NULL |  |  |
| psych_assess_floortime_note2 | text | YES |  | NULL |  |  |
| psych_assess_floortime_note3 | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_psych_assess_head_id | psych_assess_head_id | no | 1 |
| PRIMARY | psych_assess_floortime_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
