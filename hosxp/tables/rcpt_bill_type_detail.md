# `rcpt_bill_type_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| rcpt_bill_type_detail_id | int(11) | NO | PRI | 0 |  |  |
| rcpt_bill_type_id | int(11) | YES | MUL | NULL |  |  |
| pttype | char(2) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_rcpt_bill_type_id | rcpt_bill_type_id | no | 1 |
| PRIMARY | rcpt_bill_type_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
