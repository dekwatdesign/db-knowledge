# `sks_bill_opbill`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| sks_bill_opbill_id | int(11) | NO | PRI | 0 |  |  |
| sks_bill_id | int(11) | YES | MUL | NULL |  |  |
| invcount | int(11) | YES |  | NULL |  |  |
| bill_line | int(11) | YES |  | NULL |  |  |
| invno | varchar(20) | YES |  | NULL |  |  |
| billmuad | varchar(10) | YES |  | NULL |  |  |
| amount | double(15,3) | YES |  | NULL |  |  |
| paid | double(15,3) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_sks_bill_id | sks_bill_id | no | 1 |
| PRIMARY | sks_bill_opbill_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
