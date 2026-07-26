# `rcpt_bill_type_head`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| rcpt_bill_type_id | int(11) | NO | PRI | 0 |  |  |
| rcpt_bill_type_name | varchar(250) | YES |  | NULL |  |  |
| rcpt_bill_type_active | char(1) | YES |  | NULL |  |  |
| department | char(3) | YES |  | NULL |  |  |
| bookno | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | rcpt_bill_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
