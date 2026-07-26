# `psych_screen_addict`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_screen_addict_id | int(11) | NO | PRI | 0 |  |  |
| psych_screen_addict_date | date | YES |  | NULL |  |  |
| psych_screen_addict_time | time | YES |  | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| psych_screen_addict_doctor | varchar(7) | YES |  | NULL |  |  |
| psych_addict_use_id | int(11) | YES | MUL | NULL |  |  |
| psych_addict_cause_id | int(11) | YES | MUL | NULL |  |  |
| psych_addict_type_id | int(11) | YES | MUL | NULL |  |  |
| psych_addict_frequency_id | int(11) | YES | MUL | NULL |  |  |
| psych_addict_period_id | int(11) | YES | MUL | NULL |  |  |
| psych_screen_addict_note | text | YES |  | NULL |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
| ix_hn | hn | no | 1 |
| ix_psych_addict_cause_id | psych_addict_cause_id | no | 1 |
| ix_psych_addict_frequency_id | psych_addict_frequency_id | no | 1 |
| ix_psych_addict_period_id | psych_addict_period_id | no | 1 |
| ix_psych_addict_type_id | psych_addict_type_id | no | 1 |
| ix_psych_addict_use_id | psych_addict_use_id | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | psych_screen_addict_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
