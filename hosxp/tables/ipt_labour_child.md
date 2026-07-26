# `ipt_labour_child`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipt_labour_child_id | int(11) | NO | PRI | 0 |  |  |
| ipt_labour_id | int(11) | YES |  | NULL |  |  |
| sex | char(1) | YES |  | NULL |  |  |
| bw | int(11) | YES |  | NULL |  |  |
| temperature | double(15,3) | YES |  | NULL |  |  |
| apgar_1 | int(11) | YES |  | NULL |  |  |
| apgar_5 | int(11) | YES |  | NULL |  |  |
| apgar_10 | int(11) | YES |  | NULL |  |  |
| child_number | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | ipt_labour_child_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
