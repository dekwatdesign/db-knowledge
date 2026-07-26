# `psych_assess_bdi`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_assess_bdi_id | int(11) | NO | PRI | 0 |  |  |
| psych_assess_bdi_type_id | int(11) | YES | MUL | NULL |  |  |
| psych_assess_head_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_psych_assess_bdi_type_id | psych_assess_bdi_type_id | no | 1 |
| ix_psych_assess_head_id | psych_assess_head_id | no | 1 |
| PRIMARY | psych_assess_bdi_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
