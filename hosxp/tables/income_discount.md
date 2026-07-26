# `income_discount`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| income | char(2) | NO | PRI |  |  |  |
| pttype | char(2) | NO | PRI |  |  |  |
| discount | double(15,3) | YES |  | NULL |  |  |
| department | char(3) | NO | PRI |  |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_income | income | no | 1 |
| ix_pttype | pttype | no | 1 |
| PRIMARY | income | yes | 1 |
| PRIMARY | pttype | yes | 2 |
| PRIMARY | department | yes | 3 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
