# `rcpt_print_trans_cancel`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| rcpt_print_trans_head_id | int(11) | NO | PRI | 0 |  |  |
| cancel_datetime | datetime | YES |  | NULL |  |  |
| cancel_reason | varchar(250) | YES |  | NULL |  |  |
| officer_id | int(11) | YES |  | NULL |  |  |
| cancel_xml_data | longtext | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | rcpt_print_trans_head_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
