# `blb_crossmatch_idn`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| blb_crossmatch_idn_id | int(11) | NO | PRI | 0 |  |  |
| blb_request_id | int(11) | YES | MUL | NULL |  |  |
| blb_crossmatch_idn_anti | varchar(200) | YES |  | NULL |  |  |
| blb_crossmatch_idn_reporter | varchar(50) | YES |  | NULL |  |  |
| blb_crossmatch_idn_report_date | date | YES | MUL | NULL |  |  |
| blb_crossmatch_idn_report_time | time | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_blb_crossmatch_idn_report_date | blb_crossmatch_idn_report_date | no | 1 |
| ix_blb_request_id | blb_request_id | no | 1 |
| PRIMARY | blb_crossmatch_idn_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
