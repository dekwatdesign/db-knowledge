# `moph_dental`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| moph_dental_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(12) | YES |  | NULL |  |  |
| dental_care_id | int(11) | YES |  | NULL |  |  |
| dtmain_id | int(11) | YES |  | NULL |  |  |
| message_code | int(11) | YES |  | NULL |  |  |
| response_message | longtext | YES |  | NULL |  |  |
| transfer_datetime | datetime | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | moph_dental_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
