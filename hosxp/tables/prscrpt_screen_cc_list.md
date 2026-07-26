# `prscrpt_screen_cc_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| prscrpt_screen_cc_list_id | int(11) | NO | PRI | 0 |  |  |
| cc | text | YES |  | NULL |  |  |
| period_qty | int(11) | YES |  | NULL |  |  |
| period_unit_name | varchar(50) | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| depcode | varchar(3) | YES |  | NULL |  |  |
| doctor_code | varchar(15) | YES |  | NULL |  |  |
| entry_datetime | datetime | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES |  | NULL |  |  |
| cc_nvarchar | varchar(250) | YES |  | NULL |  |  |
| prscrpt_screen_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | prscrpt_screen_cc_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
