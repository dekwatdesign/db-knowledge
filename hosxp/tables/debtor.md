# `debtor`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| debtor_number | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| vstdate | date | YES |  | NULL |  |  |
| amount | double(15,3) | YES |  | NULL |  |  |
| cleared | char(1) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | debtor_number | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
