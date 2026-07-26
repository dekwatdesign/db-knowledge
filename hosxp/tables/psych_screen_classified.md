# `psych_screen_classified`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_screen_classified_id | int(11) | NO | PRI | 0 |  |  |
| psych_screen_classified_date | date | YES |  | NULL |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| psych_screen_classified_vs | char(1) | YES |  | NULL |  |  |
| psych_screen_classified_self | char(1) | YES |  | NULL |  |  |
| psych_screen_classified_another | char(1) | YES |  | NULL |  |  |
| psych_screen_classified_asset | char(1) | YES |  | NULL |  |  |
| psych_screen_classified_drug | char(255) | YES |  | NULL |  |  |
| psych_screen_classified_il | varchar(10) | YES |  | NULL |  |  |
| psych_screen_result | varchar(50) | YES |  | NULL |  |  |
| date_entry | datetime | YES |  | NULL |  |  |
| staff_entry | varchar(50) | YES |  | NULL |  |  |
| doctor_code | varchar(50) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| psych_screen_classified_ns | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hn | hn | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | psych_screen_classified_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
