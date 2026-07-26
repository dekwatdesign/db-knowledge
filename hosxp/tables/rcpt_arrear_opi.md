# `rcpt_arrear_opi`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| rcpt_arrear_opi_id | int(11) | NO | PRI | 0 |  |  |
| arrear_id | int(11) | YES | MUL | NULL |  |  |
| opi_guid | varchar(38) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_arrear_id | arrear_id | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | rcpt_arrear_opi_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
