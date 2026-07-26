# `drug_counseling_pttype`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| counseling_pttype | int(11) | NO | PRI | 0 |  |  |
| counseling_pttype_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_counseling_pttype_name | counseling_pttype_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | counseling_pttype | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
