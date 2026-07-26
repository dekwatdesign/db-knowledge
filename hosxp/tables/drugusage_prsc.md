# `drugusage_prsc`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drugusage_prsc_id | int(11) | NO | PRI | 0 |  |  |
| item_id | int(11) | YES |  | NULL |  |  |
| drugusage_prsc_line1 | varchar(150) | YES |  | NULL |  |  |
| drugusage_prsc_line2 | varchar(150) | YES |  | NULL |  |  |
| drugusage_prsc_line3 | varchar(150) | YES |  | NULL |  |  |
| usage_shortlist | varchar(250) | YES |  | NULL |  |  |
| drug_hint_text | varchar(150) | YES |  | NULL |  |  |
| modify_datetime | datetime | YES |  | NULL |  |  |
| modify_staff | varchar(25) | YES |  | NULL |  |  |
| customer_prsc_dt_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | drugusage_prsc_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
