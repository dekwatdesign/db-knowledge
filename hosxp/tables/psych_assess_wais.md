# `psych_assess_wais`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_assess_wais_id | int(11) | NO | PRI | 0 |  |  |
| psych_assess_head_id | int(11) | YES | MUL | NULL |  |  |
| viq | int(11) | YES |  | NULL |  |  |
| piq | int(11) | YES |  | NULL |  |  |
| fiq | int(11) | YES |  | NULL |  |  |
| psych_assess_wais_evauate | text | YES |  | NULL |  |  |
| psych_assess_wais_note | text | YES |  | NULL |  |  |
| psych_assess_wais_consult | text | YES |  | NULL |  |  |
| psych_assess_iq_level_id | int(11) | YES |  | NULL |  |  |
| psych_assess_disabled_level_name | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_psych_assess_head_id | psych_assess_head_id | no | 1 |
| PRIMARY | psych_assess_wais_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
