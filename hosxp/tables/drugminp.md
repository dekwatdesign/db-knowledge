# `drugminp`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| minpno | varchar(9) | YES | UNI | NULL |  |  |
| invno | varchar(100) | YES |  | NULL |  |  |
| minptype | char(2) | YES |  | NULL |  |  |
| bdgtype | char(1) | YES |  | NULL |  |  |
| dscamt | double(22,3) | YES |  | NULL |  |  |
| inpdate | datetime | YES |  | NULL |  |  |
| note | varchar(100) | YES |  | NULL |  |  |
| pono | varchar(100) | YES |  | NULL |  |  |
| phmdlr | char(3) | YES |  | NULL |  |  |
| vatamt | double(22,3) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| minpno_unique | minpno | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
