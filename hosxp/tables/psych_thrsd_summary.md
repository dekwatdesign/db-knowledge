# `psych_thrsd_summary`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_thrsd_summary_id | int(11) | NO | PRI | 0 |  |  |
| psych_thrsd_summary_date | date | YES |  | NULL |  |  |
| vn_an | varchar(13) | YES | MUL | NULL |  |  |
| result | varchar(100) | YES |  | NULL |  |  |
| score | int(11) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| staff_entry | varchar(50) | YES |  | NULL |  |  |
| date_entry | date | YES |  | NULL |  |  |
| staff_assessment | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_vn_an | vn_an | no | 1 |
| PRIMARY | psych_thrsd_summary_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
