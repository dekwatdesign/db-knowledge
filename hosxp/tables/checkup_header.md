# `checkup_header`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| chkup_header_id | int(11) | NO | PRI | 0 |  |  |
| chkup_visit_id | int(11) | YES |  | NULL |  |  |
| chkup_prog_name | varchar(100) | YES |  | NULL |  |  |
| chkup_prog_price | double(10,2) | YES |  | NULL |  |  |
| chkup_prog_icode | varchar(7) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | chkup_header_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
